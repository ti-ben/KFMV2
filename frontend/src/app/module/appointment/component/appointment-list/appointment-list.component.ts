import {Component, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {AppointmentService} from "@appointment/service/appointment.service";
import {ApiResponse} from "@shared/model";
import {Appointment} from "@appointment/model";
import {UserService} from "@user/service/user.service";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  adr!: ApiResponse;
  userAppointmentAdr!: ApiResponse;

  constructor(public appointmentService: AppointmentService, public userService: UserService) {
  }

  ngOnInit(): void {
    //this.getAllAppointmentByUserIdAndPeriodId();
    this.getAllAdrByUserId();
  }

  getAllAppointmentByUserIdAndPeriodId(): void {
    this.appointmentService.listAdr(this.userService.currentDetail$.value.user_id,'3de5f78e-c3b8-4df5-8274-3f2d0fba6de8', 'adr').subscribe({
      next: (data) => {
        this.adr = data;
        console.log('list',this.adr);
      },
      error: (e) => console.error(e)
    });
  }

  getAllAdrByUserId(): void {
    this.appointmentService.listUserAdrAppointment(this.userService.currentDetail$.value.user_id, 'adr').subscribe({
      next: (uapp) => {
        this.userAppointmentAdr = uapp;
        console.log('listUserAppointment',this.userAppointmentAdr);
      }
  });
}

}
