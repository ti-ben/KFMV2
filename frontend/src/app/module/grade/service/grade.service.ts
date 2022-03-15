import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import { Observable } from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import { map } from 'rxjs/operators';
import { isNil } from 'lodash';
import { Grade } from '@grade/model/business';
import { GradeHelper } from '@grade/helper';
import { GradeDto } from '@grade/model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  create(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.GRADE_CREATE}`);
  }

// Théoriquement ici tu sors une liste d'utilisateur.
// Observable<User[]>
  list(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.GRADE_LIST}`);
  }

  detail(id: string): Observable<Grade> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.GRADE_DETAIL}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? GradeHelper.fromDto(response.data as GradeDto) : GradeHelper.getEmpty();
        })
      );
  }

  update(id: string): Observable<Grade> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.GRADE_UPDATE}${id}`)
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
