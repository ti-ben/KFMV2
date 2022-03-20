import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import { Observable } from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import { map } from 'rxjs/operators';
import { isNil } from 'lodash';
import { VehiculeHelper } from '@vehicule/helper';
import { Vehicule, VehiculeCreatePayload, VehiculeDto, VehiculeUpdatePayload } from '@vehicule/model';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  create(payload: VehiculeCreatePayload): Observable<ApiResponse> {
    return this.post(ApiUriEnum.VEHICULE_CREATE, payload);
  }

  list(): Observable<Vehicule[]> {
    return this.get(ApiUriEnum.VEHICULE_LIST)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? VehiculeHelper.fromDtoArray(response.data as VehiculeDto[]) : [];
        })
      )
  }

  detail(id: string): Observable<Vehicule> {
    return this.get(`${ApiUriEnum.VEHICULE_DETAIL}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? VehiculeHelper.fromDto(response.data as VehiculeDto) : VehiculeHelper.getEmpty();
        })
      );
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
