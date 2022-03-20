import {Component, OnInit} from '@angular/core';
import {UserService} from "@user/service/user.service";
import {BehaviorSubject} from "rxjs";
import {GenericTableConfig} from "@shared/model";
import {tap} from "rxjs/operators";
import {User} from "@user/model";
import {GenericTableHelper} from "@shared/helper";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.list().pipe(
      tap((list: User[]) => this.setConfig(list)))
      .subscribe();
  }

  private setConfig(list: User[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genUserFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
