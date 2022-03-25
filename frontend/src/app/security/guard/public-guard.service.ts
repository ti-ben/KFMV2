import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { AuthService } from '../service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuardService implements CanActivate {


  constructor(private auth: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.auth.isAuthenticated) {
      this.auth.navigation.navigateToSecure();
      return false;
    }
    return true;
  }
}
