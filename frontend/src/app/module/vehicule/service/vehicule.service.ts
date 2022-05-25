import {Injectable} from '@angular/core';
import {ApiService} from '@shared/service/api.service';
import {HttpService} from '@shared/service/http.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ApiResponse, ApiUriEnum} from '@shared/model';
import {map, tap} from 'rxjs/operators';
import {isNil} from 'lodash';
import {VehiculeHelper} from '@vehicule/helper';
import {Vehicule, VehiculeCreatePayload, VehiculeDto, VehiculeSearch, VehiculeUpdatePayload} from '@vehicule/model';

@Injectable({
  providedIn: 'root'
})

export class VehiculeService extends ApiService {
  currentDetail$ = new BehaviorSubject<Vehicule>(VehiculeHelper.getEmpty());
  refresh$ = new Subject<any>();

  constructor(public http: HttpService) {
    super(http);
  }

  search(search: VehiculeSearch): Observable<Vehicule[]> {
    return this.post(ApiUriEnum.VEHICULE_SEARCH, search)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? VehiculeHelper.fromDtoArray(response.data as VehiculeDto[]) : [];
        })
      )
  }

  create(payload: VehiculeCreatePayload): Observable<ApiResponse> {
    return this.post(ApiUriEnum.VEHICULE_CREATE, payload)
      .pipe(
        tap((response: ApiResponse) => {
      if (response.result) {
        this.refresh$.next();
      }
    }));
  }

  list(): Observable<Vehicule[]> {
    return this.get(ApiUriEnum.VEHICULE_LIST)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? VehiculeHelper.fromDtoArray(response.data as VehiculeDto[]) : [];
        })
      )
  }

  detail(id: string): void {
    const detail = this.currentDetail$.getValue();
    if (detail.vehicule_id === id) {
      this.currentDetail$.next(detail);
    } else {
      this.get(`${ApiUriEnum.VEHICULE_DETAIL}${id}`)
        .pipe(tap((response: ApiResponse) => {
          this.currentDetail$.next((response.result && !isNil(response.data)) ? VehiculeHelper.fromDto(response.data as VehiculeDto) : VehiculeHelper.getEmpty());
        })).subscribe();
    }
  }

  update(payload: VehiculeUpdatePayload): Observable<Vehicule> {
    return this.put(ApiUriEnum.VEHICULE_UPDATE, payload)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? VehiculeHelper.fromDto(response.data as VehiculeDto) : VehiculeHelper.getEmpty();
        })
      );
  }

  delete(id: string): Observable<ApiResponse> {
    return this.http.get(`${ApiUriEnum.VEHICULE_DELETE}${id}`);
  }
}
