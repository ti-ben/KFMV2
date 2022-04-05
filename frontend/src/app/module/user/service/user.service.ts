import {Injectable} from '@angular/core';
import {ApiService} from '@shared/service/api.service';
import {HttpService} from '@shared/service/http.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ApiResponse, ApiUriEnum} from '@shared/model';
import {map, tap} from 'rxjs/operators';
import {isNil} from 'lodash';
import {UserHelper} from '@user/helper';
import {User, UserCreatePayload, UserDto, UserSearch, UserUpdatePayload} from '@user/model';
import {VehiculeCreatePayload} from "@vehicule/model";

@Injectable({
  providedIn: 'root'
})

export class UserService extends ApiService {
  currentDetail$ = new BehaviorSubject<User>(UserHelper.getEmpty());
  refresh$ = new Subject<any>();

  constructor(public http: HttpService) {
    super(http);
  }

  search(search:UserSearch): Observable<User[]> {
    return this.post(ApiUriEnum.USER_SEARCH, search)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? UserHelper.fromDtoArray(response.data as UserDto[]) : [];
        })
      )
  }

  create(payload: UserCreatePayload): Observable<ApiResponse> {
    return this.post(ApiUriEnum.USER_CREATE, payload).pipe(tap((response: ApiResponse) => {
      if (response.result) {
        this.refresh$.next();
      }
    }));
  }

  update(payload: UserUpdatePayload): Observable<User> {
    return this.put(ApiUriEnum.USER_UPDATE, payload)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? UserHelper.fromDto(response.data as UserDto) : UserHelper.getEmpty();
        })
      );
  }

  list(): Observable<User[]> {
    return this.get(ApiUriEnum.USER_LIST)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? UserHelper.fromDtoArray(response.data as UserDto[]) : [];
        })
      )
  }

  detail(id: string): void {
    const detail = this.currentDetail$.getValue();
    if (detail.user_id === id) {
      this.currentDetail$.next(detail);
    } else {
      this.get(`${ApiUriEnum.USER_DETAIL}${id}`)
        .pipe(tap((response: ApiResponse) => {
          this.currentDetail$.next((response.result && !isNil(response.data)) ? UserHelper.fromDto(response.data as UserDto) : UserHelper.getEmpty());
        })).subscribe();
    }
  }

  delete(id: string): Observable<ApiResponse> {
    return this.http.get(`${ApiUriEnum.USER_DELETE}${id}`);
  }
}
