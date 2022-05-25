import {Component, OnInit} from '@angular/core';
import {ApiResponse} from "@shared/model";
import {UserService} from "@user/service/user.service";
import {TachygrapheService} from "@tachygraphe/service/tachygraphe.service";

@Component({
  selector: 'app-tachygraphe-list',
  templateUrl: './tachygraphe-list.component.html',
  styleUrls: ['./tachygraphe-list.component.scss']
})
export class TachygrapheListComponent implements OnInit {
  userTachographList!: ApiResponse;
  private user_id = this.userService.currentDetail$.value.user_id;

  constructor(public tachygrapheService: TachygrapheService, public userService: UserService) {
  }

  ngOnInit(): void {
    this.TachListUser();
  }

  TachListUser() {
    this.tachygrapheService.listUserTachograph(this.user_id).subscribe({
      next: (tachyData: ApiResponse) => {
        this.userTachographList = tachyData;
      }
    });
  }
}
