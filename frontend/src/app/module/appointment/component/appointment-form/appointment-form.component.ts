import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AppointmentService} from "@appointment/service/appointment.service";
import {BehaviorSubject} from "rxjs";
import {ApiResponse, SelectConfig} from "@shared/model";
import {GenreHelper} from "@shared/helper";
import {AppointmentHelper} from "@appointment/helper";
import {AppointmentCreatePayload} from "@appointment/model";
import {UserService} from "@user/service/user.service";

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {
  typeSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  adrGroup!: FormGroup;

  constructor(public appointmentService: AppointmentService, public userService: UserService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.setSelectConfig();
  }

  addAdr() {
    if (this.adrGroup.valid) {
      const payload: AppointmentCreatePayload = this.adrGroup.value;
      payload.tag = 'adr';
      payload.user = this.userService.currentDetail$.value.user_id;
      console.log('paylaod', payload);
      this.appointmentService.create(payload).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.adrGroup.reset();
        }
      })
    }
  }

  private initForm(): void {
    this.adrGroup = AppointmentHelper.toFormGroup();
  }

  public getControl(name: string): FormControl {
    return this.adrGroup.get(name) as FormControl;
  }

  private setSelectConfig(): void {
    this.typeSelectConfig$.next({
      label: {label: 'form.adr.label.type'},
      placeholder: 'form.adr.placeholder.type',
      ctrl: this.getControl('type'),
      values: GenreHelper.toSelectOption()
    });
  }

}
