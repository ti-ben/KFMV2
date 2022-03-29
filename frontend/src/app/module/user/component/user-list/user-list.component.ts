import {Component, OnInit} from '@angular/core';
import {UserService} from '@user/service/user.service';
import {BehaviorSubject} from 'rxjs';
import {User} from '@user/model';
import {tap} from 'rxjs/operators';
import {CardConfig, MenuItem, MenuItemType} from '@shared/model';
import {MenuHelper} from '@shared/helper/menu.helper';
import {cloneDeep} from 'lodash';
import {NavigationService} from '@shared/service/navigation.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  list$ = new BehaviorSubject<User[]>([]);
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  user$ = new BehaviorSubject<User | undefined>(undefined);
  cardConfig!: CardConfig;

  constructor(public userService: UserService, public navigation: NavigationService) {
  }

  ngOnInit(): void {
    this.cardConfig = {
      css: 'max-width-1024 p-large margin-auto margin-large'
    };
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
}
