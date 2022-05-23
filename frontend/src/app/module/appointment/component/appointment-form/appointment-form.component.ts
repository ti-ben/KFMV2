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
  adrFormGroup!: FormGroup;

  user_id = this.userService.currentDetail$.value;
  tab_tag = 'adr';

  constructor(public appointmentService: AppointmentService, public userService: UserService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.setSelectConfig();
  }

  addAdr() {
    if (this.adrFormGroup.valid) {
      const payload: AppointmentCreatePayload = this.adrFormGroup.value;
      payload.tag = this.tab_tag;
      payload.user = this.user_id;
      console.log('paylaod', payload);
      this.appointmentService.create(payload).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.adrFormGroup.reset();
        }
      })
    }
  }

  private initForm(): void {
    this.adrFormGroup = AppointmentHelper.toFormGroup();
  }

  public getControl(name: string): FormControl {
    return this.adrFormGroup.get(name) as FormControl;
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
