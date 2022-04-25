import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CardConfig} from "@shared/model";
import {CardHelper} from "@shared/helper";
import {BehaviorSubject} from "rxjs";
import {Period} from "@period/model";
import {Appointment} from "@appointment/model";

@Component({
  selector: 'app-user-detail-cap',
  templateUrl: './user-detail-cap.component.html',
  styleUrls: ['./user-detail-cap.component.scss']
})
export class UserDetailCapComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.defaultConfig('page.user.session_cap.title');
  periodList$ = new BehaviorSubject<Period[]>([]);
  appointmentList$ = new BehaviorSubject<Appointment[]>([]);
  periodGroup!: FormGroup;
  appointmentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    console.log('Period list', this.periodList$);
    console.log('Appointment list', this.appointmentList$);
    this.periodGroup = new FormGroup({

    })
    this.appointmentForm = new FormGroup({

    })
  }

  public getControl(name: string): FormControl {
    return this.periodGroup.get(name) as FormControl;
    return this.appointmentForm.get(name) as FormControl;
  }

 addPeriod() {
    alert('add period');
  }

  addAppointment(){
    alert('add Session')
  }

  deleteSession(){
    alert('delete Session')
  }
}
