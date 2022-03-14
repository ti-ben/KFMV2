import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import { Observable } from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import { User } from '@user/model/business';
import { map } from 'rxjs/operators';
import { isNil } from 'lodash';
import { UserHelper } from '@user/helper';
import { UserDto } from '@user/model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }
// théoriquement ici tu sors une liste d'utilisateur.
  list(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.USER}`);
  }

  detail(id: string): Observable<User> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.USER_DETAIL}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? UserHelper.fromDto(response.data as UserDto) : UserHelper.getEmpty();
        })
      );
  }
}
