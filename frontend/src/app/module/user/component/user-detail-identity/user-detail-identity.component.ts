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
      gender: new FormControl(this.detail.gender),
      avatar: new FormControl(this.detail.avatar),
      dob: new FormControl(this.detail.dob),
      email: new FormControl(this.detail.email),
      password: new FormControl(this.detail.password),
      telpro: new FormControl(this.detail.telpro),
      telperso: new FormControl(this.detail.telperso),
      nationality: new FormControl(this.detail.nationality),
      numirn: new FormControl(this.detail.numirn),
      driver_license: new FormControl(this.detail.driver_license),
      created_on: new FormControl(this.detail.created_on),
      pob: new FormControl(this.detail.pob),
      active: new FormControl(this.detail.active),
      status: new FormControl(this.detail.status.name),
      grade: new FormControl(this.detail.grade.name),
      site_name: new FormControl(this.detail.site.name),
      cp: new FormControl(this.detail.addresslist.cp)
    })
  }

  onClick() {
    alert('envoi du form');
  }
}
