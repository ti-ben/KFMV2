import {Injectable} from '@angular/core';
import {ApiService} from '@shared/service/api.service';
import {HttpService} from '@shared/service/http.service';
import {Observable} from 'rxjs';
import {ApiResponse, ApiUriEnum} from '@shared/model';
import {map} from 'rxjs/operators';
import {isNil} from 'lodash';
import {NumberplateHelper} from '@numberplate/helper';
import {Numberplate, NumberplateCreatePayload, NumberplateDto, NumberplateUpdatePayload} from '@numberplate/model';

@Injectable({
  providedIn: 'root'
})
export class NumberplateService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  create(payload: NumberplateCreatePayload): Observable<ApiResponse> {
    return this.post(ApiUriEnum.NUMBERPLATE_CREATE, payload);
  }

  list(): Observable<Numberplate[]> {
    return this.get(ApiUriEnum.NUMBERPLATE_LIST)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? NumberplateHelper.fromDtoArray(response.data as NumberplateDto[]) : [];
        })
      )
  }

  detail(id: string): Observable<Numberplate> {
    return this.get(`${ApiUriEnum.NUMBERPLATE_DETAIL}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? NumberplateHelper.fromDto(response.data as NumberplateDto) : NumberplateHelper.getEmpty();
        })
      );
  }

  update(payload: NumberplateUpdatePayload): Observable<Numberplate> {
    return this.put(ApiUriEnum.NUMBERPLATE_UPDATE, payload)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? NumberplateHelper.fromDto(response.data as NumberplateDto) : NumberplateHelper.getEmpty();
        })
      );
  }

  delete(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.NUMBERPLATE_DELETE}`);
  }
}
