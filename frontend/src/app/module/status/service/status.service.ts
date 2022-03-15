import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import { Observable } from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import { map } from 'rxjs/operators';
import { isNil } from 'lodash';
import { Status } from '@status/model/business';
import { StatusHelper } from '@status/helper';
import { StatusDto } from '@status/model';

@Injectable({
  providedIn: 'root'
})
export class StatusService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  create(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.STATUS_CREATE}`);
  }

// Théoriquement ici tu sors une liste d'utilisateur.
// Observable<User[]>
  list(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.STATUS_LIST}`);
  }

  detail(id: string): Observable<Status> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.STATUS_DETAIL}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? StatusHelper.fromDto(response.data as StatusDto) : StatusHelper.getEmpty();
        })
      );
  }

  update(id: string): Observable<Status> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.STATUS_UPDATE}${id}`)
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
