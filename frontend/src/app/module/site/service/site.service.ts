import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import { Observable } from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import { map } from 'rxjs/operators';
import { isNil } from 'lodash';
import { Site } from '@site/model/business';
import { SiteHelper } from '@site/helper';
import { SiteDto } from '@site/model';

@Injectable({
  providedIn: 'root'
})
export class SiteService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  create(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.SITE_CREATE}`);
  }

// Théoriquement ici tu sors une liste d'utilisateur.
// Observable<User[]>
  list(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.SITE_LIST}`);
  }

  detail(id: string): Observable<Site> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.SITE_DETAIL}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? SiteHelper.fromDto(response.data as SiteDto) : SiteHelper.getEmpty();
        })
      );
  }

  update(id: string): Observable<Site> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.SITE_UPDATE}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? SiteHelper.fromDto(response.data as SiteDto) : SiteHelper.getEmpty();
        })
      );
  }

  delete(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.SITE_DELETE}`);
  }
}
