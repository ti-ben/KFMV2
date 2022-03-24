import {Injectable} from '@angular/core';
import {ApiService} from '@shared/service/api.service';
import {HttpService} from '@shared/service/http.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {ApiResponse, ApiUriEnum} from '@shared/model';
import {map, tap} from 'rxjs/operators';
import {isNil} from 'lodash';
import {NumberplateHelper} from '@numberplate/helper';
import {Numberplate, NumberplateCreatePayload, NumberplateDto, NumberplateUpdatePayload} from '@numberplate/model';

@Injectable({
  providedIn: 'root'
})

export class NumberplateService extends ApiService {
  currentDetail$ = new BehaviorSubject<Numberplate>(NumberplateHelper.getEmpty());

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

  detail(id: string): void {
    const detail = this.currentDetail$.getValue();
    if (detail.numberplate_id === id) {
      this.currentDetail$.next(detail);
    } else {
      this.get(`${ApiUriEnum.NUMBERPLATE_DETAIL}${id}`)
        .pipe(tap((response: ApiResponse) => {
          this.currentDetail$.next((response.result && !isNil(response.data)) ? NumberplateHelper.fromDto(response.data as NumberplateDto) : NumberplateHelper.getEmpty());
        })).subscribe();
    }
  }

  update(payload: NumberplateUpdatePayload): Observable<Numberplate> {
    return this.put(ApiUriEnum.NUMBERPLATE_UPDATE, payload)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? NumberplateHelper.fromDto(response.data as NumberplateDto) : NumberplateHelper.getEmpty();
        })
      );
  }

  delete(id: string): Observable<ApiResponse> {
    return this.http.get(`${ApiUriEnum.NUMBERPLATE_DELETE}${id}`);
  }
}
