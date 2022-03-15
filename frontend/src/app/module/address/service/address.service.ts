import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import { Observable } from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';
import { map } from 'rxjs/operators';
import { isNil } from 'lodash';
import { Address } from '@address/model/business';
import { AddressHelper } from '@address/helper';
import { AddressDto } from '@address/model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  create(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.ADDRESS_CREATE}`);
  }

// Théoriquement ici tu sors une liste d'utilisateur.
// Observable<User[]>
  list(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.ADDRESS_LIST}`);
  }

  detail(id: string): Observable<Address> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.ADDRESS_DETAIL}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? AddressHelper.fromDto(response.data as AddressDto) : AddressHelper.getEmpty();
        })
      );
  }

  update(id: string): Observable<Address> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.ADDRESS_UPDATE}${id}`)
      .pipe(
        map((response: ApiResponse) => {
          return (response.result && !isNil(response.data)) ? AddressHelper.fromDto(response.data as AddressDto) : AddressHelper.getEmpty();
        })
      );
  }

  delete(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.ADDRESS_DELETE}`);
  }
}
