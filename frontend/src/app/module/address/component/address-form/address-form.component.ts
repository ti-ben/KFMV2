import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AddressHelper} from "@address/helper";
import {AddressService} from "@address/service/address.service";

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(public addressService: AddressService) {
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

  create() {
    console.log('CREATE ADDRESS')
  }

}
