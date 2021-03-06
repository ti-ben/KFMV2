import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import { Observable } from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import { map } from 'rxjs/operators';
import { isNil } from 'lodash';
import { Period } from '@period/model/business';
import { PeriodHelper } from '@period/helper';
import { PeriodDto } from '@period/model';
import {Grade, GradeDto} from "@grade/model";
import {GradeHelper} from "@grade/helper";

@Injectable({
  providedIn: 'root'
})
export class PeriodService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  create(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.PERIOD_CREATE}`);
  }

  list(): Observable<Period[]> {
    return this.get(ApiUriEnum.PERIOD_LIST)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? PeriodHelper.fromDtoArray(response.data as PeriodDto[]) : [];
        })
      )
  }

  detail(id: string): Observable<Period> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.PERIOD_DETAIL}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? PeriodHelper.fromDto(response.data as PeriodDto) : PeriodHelper.getEmpty();
        })
      );
  }

  update(id: string): Observable<Period> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.PERIOD_UPDATE}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? PeriodHelper.fromDto(response.data as PeriodDto) : PeriodHelper.getEmpty();
        })
      );
  }

  delete(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.PERIOD_DELETE}`);
  }
}
