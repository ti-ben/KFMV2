import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AppointmentHelper} from "@appointment/helper";
import {SelectConfig} from "@shared/model";
import {ActifHelper, GenreHelper} from "@shared/helper";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-user-detail-adr',
  templateUrl: './user-detail-adr.component.html',
  styleUrls: ['./user-detail-adr.component.scss']
})
export class UserDetailAdrComponent implements OnInit {
  adrGroup!: FormGroup;
  genreSelectConfig!: SelectConfig;
  typeSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);

  constructor() {
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

  private setSelectConfig(): void {
    this.typeSelectConfig$.next( {
      label: {label: 'form.adr.label.type'},
      placeholder: 'form.adr.placeholder.type',
      ctrl: this.getControl('type'),
      values: GenreHelper.toSelectOption()
    });
  }

  addAdr() {
    alert('Ajout ADR');
  }

  update() {
    alert('Update ADR');
  }

}
