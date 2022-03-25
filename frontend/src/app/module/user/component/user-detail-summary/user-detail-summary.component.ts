import { Component, Input, OnInit } from '@angular/core';
import { UserHelper } from '@user/helper';
import { User } from '@user/model';

@Component({
  selector: 'app-user-detail-summary',
  templateUrl: './user-detail-summary.component.html',
  styleUrls: ['./user-detail-summary.component.scss']
})
export class UserDetailSummaryComponent implements OnInit {
  @Input() detail: User = UserHelper.getEmpty();

  constructor() {
  }

  ngOnInit(): void {
  }

}
