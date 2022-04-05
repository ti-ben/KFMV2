import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserHelper} from "@user/helper";
import {SelectConfig} from "@shared/model";
import {GenreHelper} from "@shared/helper";

@Component({
  selector: 'app-user-detail-adr',
  templateUrl: './user-detail-adr.component.html',
  styleUrls: ['./user-detail-adr.component.scss']
})
export class UserDetailAdrComponent implements OnInit {
  formGroup!: FormGroup;
  genreSelectConfig!: SelectConfig;

  constructor() {
  }

  ngOnInit(): void {
    this.initForm();
    this.setSelectConfig();
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  private initForm(): void {
    this.formGroup = UserHelper.toFormGroup();
  }

  private setSelectConfig(): void {
    this.genreSelectConfig = {
      label: {label: 'form.user.label.genre'},
      placeholder: 'form.user.placeholder.genre',
      ctrl: this.getControl('genre'),
      values: GenreHelper.toSelectOption()
    }
  }

  onClick() {
    alert('envoi du form');
  }

}
