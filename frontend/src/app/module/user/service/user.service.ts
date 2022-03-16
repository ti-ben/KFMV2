import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import { Observable } from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import { map } from 'rxjs/operators';
import { isNil } from 'lodash';
import { UserHelper } from '@user/helper';
import {User, UserDto, UserUpdatePayload,UserCreatePayload } from '@user/model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  create(payload: UserCreatePayload): Observable<ApiResponse> {
    return this.post(ApiUriEnum.USER_CREATE, payload);
  }

// Théoriquement ici tu sors une liste d'utilisateur.
// Observable<User[]>
  list(): Observable<ApiResponse> {
    return this.get(ApiUriEnum.USER_LIST);
  }

  detail(id: string): Observable<User> {
    return this.get(`${ApiUriEnum.USER_DETAIL}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? UserHelper.fromDto(response.data as UserDto) : UserHelper.getEmpty();
        })
      );
  }

  update(payload: UserUpdatePayload): Observable<User> {
    return this.put(ApiUriEnum.USER_UPDATE, payload)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? UserHelper.fromDto(response.data as UserDto) : UserHelper.getEmpty();
        })
      );
  }

  delete(id: string): Observable<ApiResponse> {
    return this.http.get(`${ApiUriEnum.USER_DELETE}${id}`);
  }
}
