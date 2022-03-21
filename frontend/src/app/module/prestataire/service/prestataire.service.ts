import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import { Observable } from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import { map } from 'rxjs/operators';
import { isNil } from 'lodash';
import { Prestataire } from '@prestataire/model/business';
import { PrestataireHelper } from '@prestataire/helper';
import {PrestataireCreatePayload, PrestataireDto, PrestataireUpdatePayload} from '@prestataire/model';

@Injectable({
  providedIn: 'root'
})
export class PrestataireService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  create(payload: PrestataireCreatePayload): Observable<ApiResponse> {
    return this.post(ApiUriEnum.PRESTATAIRE_CREATE, payload);
  }

  list(): Observable<Prestataire[]> {
    return this.get(ApiUriEnum.PRESTATAIRE_LIST)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? PrestataireHelper.fromDtoArray(response.data as PrestataireDto[]) : [];
        })
      )
  }

  detail(id: string): Observable<Prestataire> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.PRESTATAIRE_DETAIL}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? PrestataireHelper.fromDto(response.data as PrestataireDto) : PrestataireHelper.getEmpty();
        })
      );
  }

  update(payload: PrestataireUpdatePayload): Observable<Prestataire> {
    return this.put(ApiUriEnum.PRESTATAIRE_UPDATE, payload)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? PrestataireHelper.fromDto(response.data as PrestataireDto) : PrestataireHelper.getEmpty();
        })
      );
  }

  delete(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.PRESTATAIRE_DELETE}`);
  }
}
