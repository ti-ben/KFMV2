import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AppRoute, MenuItem } from '@shared/model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  currentMenuItem$: BehaviorSubject<MenuItem> = new BehaviorSubject<MenuItem>({
    label: '',
    link: AppRoute.DASHBOARD_HOME
  });

  constructor(public router: Router) {
  }

  navigate(path: string): void {
    this.router.navigate([path]).then();
  }

  navigateToUnsecure(): void {
    this.navigate('/guest');
  }

  navigateToSecure(): void {
    this.navigate('/dashboard');
  }
}
