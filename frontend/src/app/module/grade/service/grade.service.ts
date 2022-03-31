import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import {BehaviorSubject, Observable} from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import {map, tap} from 'rxjs/operators';
import { isNil } from 'lodash';
import { GradeHelper } from '@grade/helper';
import { Grade, GradeDto,GradeCreatePayload, GradeUpdatePayload } from '@grade/model';
import {Vehicule, VehiculeDto, VehiculeSearch} from "@vehicule/model";

@Injectable({
  providedIn: 'root'
})

export class GradeService extends ApiService {
  currentDetail$ = new BehaviorSubject<Grade>(GradeHelper.getEmpty());

  constructor(public http: HttpService) {
    super(http);
  }

  search(search:VehiculeSearch): Observable<Grade[]> {
    return this.post(ApiUriEnum.GRADE_SEARCH, search)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? GradeHelper.fromDtoArray(response.data as GradeDto[]) : [];
        })
      )
  }

  create(payload: GradeCreatePayload): Observable<ApiResponse> {
    return this.post(ApiUriEnum.GRADE_CREATE, payload);
  }

  list(): Observable<Grade[]> {
    return this.get(ApiUriEnum.GRADE_LIST)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? GradeHelper.fromDtoArray(response.data as GradeDto[]) : [];
        })
      )
  }

  detail(id: string): void {
    const detail = this.currentDetail$.getValue();
    if (detail.grade_id === id) {
      this.currentDetail$.next(detail);
    } else {
      this.get(`${ApiUriEnum.GRADE_DETAIL}${id}`)
        .pipe(tap((response: ApiResponse) => {
          this.currentDetail$.next((response.result && !isNil(response.data)) ? GradeHelper.fromDto(response.data as GradeDto) : GradeHelper.getEmpty());
        })).subscribe();
    }
  }

  update(payload: GradeUpdatePayload): Observable<Grade> {
    return this.put(ApiUriEnum.GRADE_UPDATE, payload)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? GradeHelper.fromDto(response.data as GradeDto) : GradeHelper.getEmpty();
        })
      );
  }

  delete(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.GRADE_DELETE}`);
  }
}
