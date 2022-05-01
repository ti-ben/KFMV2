import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserHelper} from "@user/helper";
import {AddressHelper} from "@address/helper";

@Component({
  selector: 'app-user-detail-address',
  templateUrl: './user-detail-address.component.html',
  styleUrls: ['./user-detail-address.component.scss']
})
export class UserDetailAddressComponent implements OnInit {
  formGroup!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.initForm();
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  private initForm(): void {
    this.formGroup = AddressHelper.toFormGroup();
  }
}
