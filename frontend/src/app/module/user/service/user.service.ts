import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { HttpService } from '@shared/service/http.service';
import { Observable } from 'rxjs';
import { ApiResponse, ApiUriEnum } from '@shared/model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  constructor(public http: HttpService) {
    super(http);
  }

  list(): Observable<ApiResponse> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.USER}`);
  }
  detail(id:string):Observable<ApiResponse>{
    return this.http.get(`${this.baseUrl}${ApiUriEnum.USER_DETAIL}${id}`);
  }
}
