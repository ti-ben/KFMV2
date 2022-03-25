import { Injectable } from '@angular/core';
import { ApiService } from '@shared/service/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@user/model';
import { UserHelper } from '@user/helper';
import { SigninPayload } from '../model/payload';
import { ApiResponse, ApiUriEnum, PayloadInterface } from '@shared/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {
  public currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>(UserHelper.getEmpty());
  public isAuthenticated = false;

  signin(payload: SigninPayload): Observable<ApiResponse> {
    return this.http.post(`${ApiUriEnum.SIGNIN}`, payload);
  }

  me(payload:PayloadInterface):void{
    this.post(`${ApiUriEnum.ME}`, payload).subscribe((response:ApiResponse)=>{
      //il est ou non loggé ou loggable
    })
  }
}
