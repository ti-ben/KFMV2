import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import { Observable } from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import { map } from 'rxjs/operators';
import { isNil } from 'lodash';
import { SiteHelper } from '@site/helper';
import { Site, SiteDto, SiteCreatePayload, SiteUpdatePayload } from '@site/model';

@Injectable({
  providedIn: 'root'
})
export class SiteService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  create(payload: SiteCreatePayload): Observable<ApiResponse> {
    return this.post(ApiUriEnum.SITE_CREATE, payload);
  }

  list(): Observable<Site[]> {
    return this.get(ApiUriEnum.SITE_LIST)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? SiteHelper.fromDtoArray(response.data as SiteDto[]) : [];
        })
      )
  }

  detail(id: string): Observable<Site> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.SITE_DETAIL}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? SiteHelper.fromDto(response.data as SiteDto) : SiteHelper.getEmpty();
        })
      );
  }

  update(payload: SiteUpdatePayload): Observable<Site> {
    return this.put(ApiUriEnum.SITE_UPDATE, payload)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? SiteHelper.fromDto(response.data as SiteDto) : SiteHelper.getEmpty();
        })
      );
  }

  delete(id: string): Observable<ApiResponse> {
    return this.http.get(`${ApiUriEnum.SITE_DELETE}${id}`);
  }
}
