import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import { Observable } from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import { map } from 'rxjs/operators';
import { isNil } from 'lodash';
import { StatusHelper } from '@status/helper';
import {Status, StatusCreatePayload, StatusDto, StatusUpdatePayload} from '@status/model';

@Injectable({
  providedIn: 'root'
})
export class StatusService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  create(payload: StatusCreatePayload): Observable<ApiResponse> {
    return this.post(ApiUriEnum.STATUS_CREATE, payload);
  }

  list(): Observable<Status[]> {
    return this.get(ApiUriEnum.STATUS_LIST)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? StatusHelper.fromDtoArray(response.data as StatusDto[]) : [];
        })
      )
  }

  detail(id: string): Observable<Status> {
    return this.get(`${ApiUriEnum.STATUS_DETAIL}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? StatusHelper.fromDto(response.data as StatusDto) : StatusHelper.getEmpty();
        })
      );
  }

  update(payload: StatusUpdatePayload): Observable<Status> {
    return this.put(ApiUriEnum.STATUS_UPDATE, payload)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? StatusHelper.fromDto(response.data as StatusDto) : StatusHelper.getEmpty();
        })
      );
  }

  delete(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.STATUS_DELETE}`);
  }
}
