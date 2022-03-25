import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@user/model';
import { UserHelper } from '@user/helper';
import { SigninPayload } from '../model/payload';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import { NavigationService } from '@shared/service/navigation.service';
import { HttpService } from '@shared/service/http.service';
import { RefreshPayload } from '../model/payload/refresh-payload';
import { map, tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { TokenDto } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {
  public currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>(UserHelper.getEmpty());
  public isAuthenticated = false;

  constructor(public navigation: NavigationService, public httpService: HttpService, public tokenService: TokenService) {
    super(httpService);
  }

  signin(payload: SigninPayload): Observable<ApiResponse> {
    console.log('paylad', payload);
    return this.post(`${ApiUriEnum.SIGNIN}`, payload)
      .pipe(
        tap((response: ApiResponse) => {
          console.log('response', response);
          this.isAuthenticated = response.result;
          if (this.isAuthenticated) {
            this.currentUser$.next(UserHelper.fromDto(response.data.user.user));
            this.tokenService.saveToken(response.data.token.access_token);
            this.tokenService.saveRefreshToken(response.data.token.refresh_token);
            console.log('mon data', response.data);
            this.navigation.navigateToSecure();
          }
        })
      );
  }

  me(): void {
    this.get(`${ApiUriEnum.ME}`).subscribe((response: ApiResponse) => {
      this.isAuthenticated = response.result;
      if (this.isAuthenticated) {
        this.currentUser$.next(UserHelper.fromDto(response.data.user));
        this.navigation.navigateToSecure();
      }
      console.log('response', response);
    })
  }

  refreshToken(refresh: RefreshPayload): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}${ApiUriEnum.REFRESH_TOKEN}`, refresh).pipe(
      map((response: ApiResponse) => {
        if (response.result) {
          const tokenResponse: TokenDto = response.data as TokenDto;
          this.tokenService.saveToken(tokenResponse.access_token);
          this.tokenService.saveRefreshToken(tokenResponse.refresh_token);
          this.isAuthenticated = true;
        }
        return response;
      })
    )
  }

  logout(): void {
    this.tokenService.signOut();
    this.isAuthenticated = false;
    this.navigation.navigateToUnsecure();
  }
}
