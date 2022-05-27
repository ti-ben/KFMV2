import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/service/user.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '@user/model';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { LabelWithParam } from '@shared/model';
import { MenuHelper } from '@shared/helper/menu.helper';
import { cloneDeep } from 'lodash';
import { NavigationService } from '@shared/service/navigation.service';
import { WithMenuAndDestroyableBaseComponent } from '@shared/component/with-menu-and-destroyable/with-menu-and-destroyable.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent extends WithMenuAndDestroyableBaseComponent implements OnInit {
  list$ = new BehaviorSubject<User[]>([]);
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  labelWithParam: LabelWithParam = {label: 'button.user-add'};

  constructor(public userService: UserService, public navigation: NavigationService) {
    super(navigation);
  }

  ngOnInit(): void {
    this.userService.refresh$.pipe(
      takeUntil(this.destroyers$),
      switchMap(() => this.userService.list()),
      tap((list: User[]) => {this.list$.next(list)}))
      .subscribe();

    this.search$.pipe(
      takeUntil(this.destroyers$),
      switchMap((search: string) => this.userService.search({search: search})),
      tap((list: User[]) => this.list$.next(list)))
      .subscribe();
  }

  create(): void {
    const item = cloneDeep(MenuHelper.employeeCreateMenuItem());
    this.navigation.navigate(item);
  }

  detail(user: User): void {
    const item = cloneDeep(MenuHelper.employeeDetailMenuItem());
    item.link += user.user_id;
    this.navigation.navigate(item);
  }
}
