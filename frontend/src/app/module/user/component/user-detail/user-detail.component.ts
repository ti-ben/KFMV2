import { Component, OnInit } from '@angular/core';
import { UserService } from "@user/service/user.service";
import { BehaviorSubject, of } from "rxjs";
import { ApiResponse, GenericTableConfig } from "@shared/model";
import { User } from "@user/model";
import { GenericTableHelper } from "@shared/helper";
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
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

  constructor(public activatedRouter: ActivatedRoute, public userService: UserService) {
  }

  ngOnInit(): void {

    this.activatedRouter.params
      .pipe(
        switchMap((params: Params) => {
          if (!isNil(params['id'])) {
            this.id = params['id'];
            return this.userService.detail(this.id);
          } else {
            return of(UserHelper.getEmpty())
          }
        })
      )
      .subscribe((response: User) => {
        console.log('user detail ', response);
      });
  }

  private setConfig(list: User[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genUserFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
