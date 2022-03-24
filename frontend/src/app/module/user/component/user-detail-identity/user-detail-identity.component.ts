import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '@user/model';
import { UserHelper } from '@user/helper';

@Component({
  selector: 'app-user-detail-identity',
  templateUrl: './user-detail-identity.component.html',
  styleUrls: ['./user-detail-identity.component.scss']
})
export class UserDetailIdentityComponent implements OnInit {
  @Input() detail: User = UserHelper.getEmpty();
  formGroup!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      firstname: new FormControl(this.detail.firstname),
      lastname: new FormControl(this.detail.lastname),
      gender: new FormControl(''),
      avatar: new FormControl(''),
      dob: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      telpro: new FormControl(''),
      telperso: new FormControl(''),
      nationality: new FormControl(''),
      numirn: new FormControl(''),
      driver_license: new FormControl(''),
      created_on: new FormControl(''),
      pob: new FormControl(''),
      active: new FormControl('')
    })
  }

  onClick() {
    alert('envoi du form');
  }
}
