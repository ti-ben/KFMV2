import {Injectable} from '@angular/core';
import {ApiService} from '@shared/service/api.service';
import {HttpService} from '@shared/service/http.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ApiResponse, ApiUriEnum} from '@shared/model';
import {map, tap} from 'rxjs/operators';
import {isNil} from 'lodash';
import {Appointment} from '@appointment/model/business';
import {AppointmentHelper} from '@appointment/helper';
import {AppointmentCreatePayload, AppointmentDto} from '@appointment/model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends ApiService {
  currentDetail$ = new BehaviorSubject<Appointment>(AppointmentHelper.getEmpty());
  refresh$ = new Subject<any>();

  constructor(public http: HttpService) {
    super(http);
  }

  create(payload: AppointmentCreatePayload): Observable<ApiResponse> {
    return this.post(ApiUriEnum.APPOINTMENT_CREATE, payload)
      .pipe(
        tap((response: ApiResponse) => {
          if (response.result) {
            this.refresh$.next();
          }
        }));
  }

  listAdr(usr_id: string, per_id: string, tag: string): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.APPOINTMENT_LIST}${per_id}/${usr_id}`);
  }

  listUserAdrAppointment(usr_id: string, tag: string): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.APPOINTMENT_LISTAPP}${tag}/${usr_id}`);
  }

  detail(id: string): Observable<Appointment> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.APPOINTMENT_DETAIL}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? AppointmentHelper.fromDto(response.data as AppointmentDto) : AppointmentHelper.getEmpty();
        })
      );
  }

  update(id: string): Observable<Appointment> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.APPOINTMENT_UPDATE}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? AppointmentHelper.fromDto(response.data as AppointmentDto) : AppointmentHelper.getEmpty();
        })
      );
  }

  delete(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.APPOINTMENT_DELETE}`);
  }
}
