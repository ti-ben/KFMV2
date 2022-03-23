import { Component, OnInit } from '@angular/core';
import { UserService } from "@user/service/user.service";
import { BehaviorSubject } from "rxjs";
import { GenericTableConfig } from "@shared/model";
import { User } from "@user/model";
import { GenericTableHelper } from "@shared/helper";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { isNil } from 'lodash';
import { UserHelper } from '@user/helper';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});
  id: string = '';

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public userService: UserService) {
  }

  ngOnInit(): void {

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

  private setConfig(list: User[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genUserFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
