import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AppRoute, MenuItem } from '@shared/model';
import { Injectable } from '@angular/core';
import { MenuHelper } from '@shared/helper/menu.helper';
import { isNil } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  currentMenuItem$: BehaviorSubject<MenuItem> = new BehaviorSubject<MenuItem>( MenuHelper.dashboardMenuItem());

  constructor(public router: Router) {
    this.setCurrentMenUitem();
  }

  navigate(item:MenuItem): void {
    this.currentMenuItem$.next(item);
    this.router.navigate([item.link]).then();
  }

  navigateToUnsecure(): void {
    this.navigate(MenuHelper.guestMenuItem());
  }

  navigateToSecure(item: MenuItem =MenuHelper.dashboardMenuItem()): void {
    this.navigate(item);
  }

  private setCurrentMenUitem():void{
    let currentMenuItem: MenuItem | undefined | MenuItem[] = MenuHelper.getAll().find((menuItem: MenuItem) => {
      return menuItem.link.includes(window.location.pathname.substring(1));
    })
    if (isNil(currentMenuItem)) {
      currentMenuItem = MenuHelper.getAll().filter((menuItem: MenuItem) => {
        return window.location.pathname.substring(1).includes(menuItem.link);
      })
      if(currentMenuItem && currentMenuItem.length > 0){
        currentMenuItem = currentMenuItem[currentMenuItem.length-1];
      }else{
        currentMenuItem = MenuHelper.dashboardMenuItem();
      }

    }
    this.currentMenuItem$.next(currentMenuItem);
  }
}
