import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import { Observable } from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import { map } from 'rxjs/operators';
import { isNil } from 'lodash';
import { Appointment } from '@appointment/model/business';
import { AppointmentHelper } from '@appointment/helper';
import { AppointmentDto } from '@appointment/model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  create(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.USER_CREATE}`);
  }

// Théoriquement ici tu sors une liste d'utilisateur.
// Observable<User[]>
  list(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.USER_LIST}`);
  }

  detail(id: string): Observable<Appointment> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.USER_DETAIL}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? AppointmentHelper.fromDto(response.data as AppointmentDto) : AppointmentHelper.getEmpty();
        })
      );
  }

  update(id: string): Observable<Appointment> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.USER_UPDATE}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? AppointmentHelper.fromDto(response.data as AppointmentDto) : AppointmentHelper.getEmpty();
        })
      );
  }

  delete(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.USER_DELETE}`);
  }
}
