import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {AppointmentService} from "@appointment/service/appointment.service";
import {ApiResponse} from "@shared/model";
import {Appointment} from "@appointment/model";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  adr!: ApiResponse;


  constructor(public appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
    this.getAllAppointmentByUserIdAndPeriodId();
  }

  getAllAppointmentByUserIdAndPeriodId(): void{
    this.appointmentService.list('3de5f78e-c3b8-4df5-8274-3f2d0fba6de8','c5ace2c1-24c5-4e4c-92d4-79e6af763478').subscribe({
      next: (data) => {
        this.adr = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
