import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/service/user.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '@user/model';
import { tap } from 'rxjs/operators';
import { AppRoute, GenericTableConfig, MenuItem, MenuItemType } from '@shared/model';
import { GenericTableHelper } from '@shared/helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});

  constructor(public userService: UserService, public router: Router) {
  }

  ngOnInit(): void {
    this.userService.list().pipe(
      tap((list: User[]) => this.setConfig(list)))
      .subscribe();
  }

  handleClick(menuItem: MenuItem): void {
    switch (menuItem.type) {
      case MenuItemType.USER_DETAIL:
        this.router.navigate([`${menuItem.link}${menuItem.data.user_id}`]).then();
        break;
    }
  }

  private setConfig(list: User[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genUserFieldDefinitions();
    config.data = list;
    config.actions = [{
      icon: 'fa-eye',
      label: '',
      link: AppRoute.USER_DETAIL,
      active: false,
      type: MenuItemType.USER_DETAIL
    }]
    this.config$.next(config);
  }
}
