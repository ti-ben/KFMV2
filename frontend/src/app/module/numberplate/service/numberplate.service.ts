import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import { Observable } from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import { map } from 'rxjs/operators';
import { isNil } from 'lodash';
import { Numberplate } from '@numberplate/model/business';
import { NumberplateHelper } from '@numberplate/helper';
import { NumberplateDto } from '@numberplate/model';

@Injectable({
  providedIn: 'root'
})
export class NumberplateService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  create(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.NUMBERPLATE_CREATE}`);
  }

// Théoriquement ici tu sors une liste d'utilisateur.
// Observable<User[]>
  list(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.NUMBERPLATE_LIST}`);
  }

  detail(id: string): Observable<Numberplate> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.NUMBERPLATE_DETAIL}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? NumberplateHelper.fromDto(response.data as NumberplateDto) : NumberplateHelper.getEmpty();
        })
      );
  }

  update(id: string): Observable<Numberplate> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.NUMBERPLATE_UPDATE}${id}`)
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
