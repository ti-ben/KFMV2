import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/service/user.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '@user/model';
import { tap } from 'rxjs/operators';
import { AppRoute, GenericTableConfig, MenuItem, MenuItemType } from '@shared/model';
import { GenericTableHelper } from '@shared/helper';
import { MenuHelper } from '@shared/helper/menu.helper';
import { cloneDeep } from 'lodash';
import { NavigationService } from '@shared/service/navigation.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  list$ = new BehaviorSubject<User[]>([]);

  //  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});

  constructor(public userService: UserService, public navigation: NavigationService) {
  }

  ngOnInit(): void {
    this.userService.list().pipe(
      tap((list: User[]) => this.list$.next(list)))
      .subscribe();
  }

  handleClick(menuItem: MenuItem): void {
    switch (menuItem.type) {
      case MenuItemType.USER_DETAIL:
        const item = cloneDeep(MenuHelper.employeeDetailMenuItem());
        item.link += menuItem.data.user_id;
        this.navigation.navigate(item);
        break;
    }
  }

  /*private setConfig(list: User[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genUserFieldDefinitions();
    config.data = list;
    config.actions = [{
      icon: 'fa-edit',
      label: '',
      link: AppRoute.USER_DETAIL,
      active: false,
      type: MenuItemType.USER_DETAIL
    }]
    this.config$.next(config);
  }*/
}
