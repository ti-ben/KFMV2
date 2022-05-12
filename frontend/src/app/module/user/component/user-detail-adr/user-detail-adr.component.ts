import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AppointmentHelper} from "@appointment/helper";
import {ApiResponse, SelectConfig} from "@shared/model";
import {ActifHelper, GenreHelper} from "@shared/helper";
import {BehaviorSubject} from "rxjs";
import {AppointmentCreatePayload} from "@appointment/model";
import {AppointmentService} from "@appointment/service/appointment.service";

@Component({
  selector: 'app-user-detail-adr',
  templateUrl: './user-detail-adr.component.html',
  styleUrls: ['./user-detail-adr.component.scss']
})
export class UserDetailAdrComponent implements OnInit {
  typeSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  genreSelectConfig!: SelectConfig;
  adrGroup!: FormGroup;

  constructor(public appointmentService: AppointmentService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.setSelectConfig();
  }

  public getControl(name: string): FormControl {
    return this.adrGroup.get(name) as FormControl;
  }

  private initForm(): void {
    this.adrGroup = AppointmentHelper.toFormGroup();
  }

  addAdr() {
    if(this.adrGroup.valid)
    {
      const payload: AppointmentCreatePayload = this.adrGroup.value;
      console.log('paylaod', payload);
      this.appointmentService.create(payload).subscribe((response: ApiResponse) => {
        if(response.result){
          this.adrGroup.reset();
        }
      })
    }
  }

  update() {
    alert('Update ADR');
  }

  private setSelectConfig(): void {
    this.typeSelectConfig$.next( {
      label: {label: 'form.adr.label.type'},
      placeholder: 'form.adr.placeholder.type',
      ctrl: this.getControl('type'),
      values: GenreHelper.toSelectOption()
    });
  }

}
