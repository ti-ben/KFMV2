import {Injectable} from '@angular/core';
import {ApiService} from '@shared/service/api.service';
import {HttpService} from '@shared/service/http.service';
import {Observable, Subject} from 'rxjs';
import {ApiResponse, ApiUriEnum} from '@shared/model';
import {map, tap} from 'rxjs/operators';
import {isNil} from 'lodash';
import {Tachygraphe} from '@tachygraphe/model/business';
import {TachygrapheHelper} from '@tachygraphe/helper';
import {TachygrapheCreatePayload, TachygrapheDto} from '@tachygraphe/model';


@Injectable({providedIn: 'root'})
export class TachygrapheService extends ApiService {
  refresh$ = new Subject<any>();

  constructor(public http: HttpService) {
    super(http);
  }

  create(payload: TachygrapheCreatePayload): Observable<ApiResponse> {
    return this.post(ApiUriEnum.TACHYGRAPHE_CREATE, payload)
      .pipe(
        tap((response: ApiResponse) => {
          if (response.result) {
            this.refresh$.next();
          }
        }));
  }

  listTachograph(usr_id: string): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.TACHYGRAPHE_LIST}${usr_id}`);
  }

  detail(tachograph_id: string): Observable<Tachygraphe> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.TACHYGRAPHE_DETAIL}${tachograph_id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? TachygrapheHelper.fromDto(response.data as TachygrapheDto) : TachygrapheHelper.getEmpty();
        })
      );
  }

  update(tachograph_id: string): Observable<Tachygraphe> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.TACHYGRAPHE_UPDATE}${tachograph_id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? TachygrapheHelper.fromDto(response.data as TachygrapheDto) : TachygrapheHelper.getEmpty();
        })
      );
  }

  delete(tachograph_id: string): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.TACHYGRAPHE_DELETE}${tachograph_id}`);
  }
}
