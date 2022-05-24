import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "@appointment/service/appointment.service";
import {ApiResponse} from "@shared/model";
import {UserService} from "@user/service/user.service";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  //search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  userAppointmentAdr!: ApiResponse;

  private user_id = this.userService.currentDetail$.value.user_id;
  private tab_tag = 'adr';

  constructor(public appointmentService: AppointmentService, public userService: UserService) {
  }

  ngOnInit(): void {
    this.getAllAdrByUserId();
  }

  getAllAdrByUserId(): void {
    this.appointmentService.listUserAdrAppointment(this.user_id, this.tab_tag).subscribe({
      next: (uapp) => {
        this.userAppointmentAdr = uapp;
        console.log('listUserAppointmentAdr', this.userAppointmentAdr);
      }
    });
  }
}
