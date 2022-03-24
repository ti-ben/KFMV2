import { Component, OnInit } from '@angular/core';
import { UserService } from "@user/service/user.service";
import { BehaviorSubject } from "rxjs";
import { GenericTableConfig, TabItem, TabItemAction } from "@shared/model";
import { User } from "@user/model";
import { GenericTableHelper } from "@shared/helper";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { isNil } from 'lodash';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});
  id: string = '';
  tabs: TabItem[] = [];
  UserDetailTab = TabItemAction;
  currentTab: TabItemAction = TabItemAction.USER_IDENTITY;

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public userService: UserService) {
  }

  ngOnInit(): void {
    this.setTab();
    this.activatedRouter.params
      .pipe(
        tap((params: Params) => {
          if (!isNil(params['id'])) {
            this.id = params['id'];
            this.userService.detail(this.id);
          }
        })
      ).subscribe();
  }

  private setTab(): void {
    this.tabs = [
      {label: 'Identify', type: TabItemAction.USER_IDENTITY},
      {label: 'Cap', type: TabItemAction.USER_CAP},
      {label: 'ADR', type: TabItemAction.USER_ADR}
    ]
  }

  private setConfig(list: User[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genUserFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
