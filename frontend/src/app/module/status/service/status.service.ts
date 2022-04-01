import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import {map, tap} from 'rxjs/operators';
import { isNil } from 'lodash';
import { StatusHelper } from '@status/helper';
import {Status, StatusSearch, StatusCreatePayload, StatusDto, StatusUpdatePayload} from '@status/model';

@Injectable({
  providedIn: 'root'
})

export class StatusService extends ApiService {
  currentDetail$ = new BehaviorSubject<Status>(StatusHelper.getEmpty());
  refresh$ = new Subject<any>();

  constructor(public http: HttpService) {
    super(http);
  }

  search(search: StatusSearch): Observable<Status[]> {
    return this.post(ApiUriEnum.STATUS_SEARCH, search)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? StatusHelper.fromDtoArray(response.data as StatusDto[]) : [];
        })
      )
  }

  create(payload: StatusCreatePayload): Observable<ApiResponse> {
    return this.post(ApiUriEnum.STATUS_CREATE, payload).pipe(tap((response: ApiResponse) => {
      if (response.result) {
        this.refresh$.next();
      }
    }));
  }

  list(): Observable<Status[]> {
    return this.get(ApiUriEnum.STATUS_LIST)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? StatusHelper.fromDtoArray(response.data as StatusDto[]) : [];
        })
      )
  }

  detail(id: string): void {
    const detail = this.currentDetail$.getValue();
    if (detail.status_id === id) {
      this.currentDetail$.next(detail);
    } else {
      this.get(`${ApiUriEnum.STATUS_DETAIL}${id}`)
        .pipe(tap((response: ApiResponse) => {
          this.currentDetail$.next((response.result && !isNil(response.data)) ? StatusHelper.fromDto(response.data as StatusDto) : StatusHelper.getEmpty());
        })).subscribe();
    }
  }

  update(payload: StatusUpdatePayload): Observable<Status> {
    return this.put(ApiUriEnum.STATUS_UPDATE, payload)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? StatusHelper.fromDto(response.data as StatusDto) : StatusHelper.getEmpty();
        })
      );
  }

  delete(id: string): Observable<ApiResponse> {
    return this.http.get(`${ApiUriEnum.STATUS_DELETE}${id}`);
  }
}
