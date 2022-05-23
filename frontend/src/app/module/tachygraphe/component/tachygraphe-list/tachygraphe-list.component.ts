import {Component, OnInit} from '@angular/core';
import {ApiResponse} from "@shared/model";
import {AppointmentService} from "@appointment/service/appointment.service";
import {UserService} from "@user/service/user.service";

@Component({
  selector: 'app-tachygraphe-list',
  templateUrl: './tachygraphe-list.component.html',
  styleUrls: ['./tachygraphe-list.component.scss']
})
export class TachygrapheListComponent implements OnInit {
  userTachographList!: ApiResponse;
  private user_id = this.userService.currentDetail$.value.user_id;
  private tab_tag = 'tachygraphe';

  constructor(public appointmentService: AppointmentService, public userService: UserService) {
  }

  ngOnInit(): void {
    //this.getallTachyInfoByUserId();
  }

  getallTachyInfoByUserId() {
    alert(`Get all tachy info for user id ${this.user_id}`);
  }
}
