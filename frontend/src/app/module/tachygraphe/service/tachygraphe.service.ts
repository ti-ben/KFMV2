import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import { Observable } from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import { map } from 'rxjs/operators';
import { isNil } from 'lodash';
import { Tachygraphe } from '@tachygraphe/model/business';
import { TachygrapheHelper } from '@tachygraphe/helper';
import { TachygrapheDto } from '@tachygraphe/model';


@Injectable({
  providedIn: 'root'
})
export class TachygrapheService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  create(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.TACHYGRAPHE_CREATE}`);
  }

  list(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.TACHYGRAPHE_LIST}`);
  }

  detail(id: string): Observable<Tachygraphe> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.TACHYGRAPHE_DETAIL}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? TachygrapheHelper.fromDto(response.data as TachygrapheDto) : TachygrapheHelper.getEmpty();
        })
      );
  }

  update(id: string): Observable<Tachygraphe> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.TACHYGRAPHE_UPDATE}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? TachygrapheHelper.fromDto(response.data as TachygrapheDto) : TachygrapheHelper.getEmpty();
        })
      );
  }

  delete(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.TACHYGRAPHE_DELETE}`);
  }
}
