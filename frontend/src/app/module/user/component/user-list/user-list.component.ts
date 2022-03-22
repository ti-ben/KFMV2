import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/service/user.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '@user/model';
import { tap } from 'rxjs/operators';
import { AppRoute, GenericTableConfig } from '@shared/model';
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

  showDetail(user: User): void {
    this.router.navigate([`${AppRoute.USER_DETAIL}${user.user_id}`]).then();
  }

  private setConfig(list: User[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genUserFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
