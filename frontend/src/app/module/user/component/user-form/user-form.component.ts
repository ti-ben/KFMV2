import {Component, Input, OnInit} from '@angular/core';
import {UserHelper} from '@user/helper';
import {User} from '@user/model';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() form: User = UserHelper.getEmpty();
  formGroup!: FormGroup;
  //currentDate = new Date().toLocaleDateString();

  constructor() {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      gender: new FormControl(),
      avatar: new FormControl(),
      dob: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      telpro: new FormControl(),
      telperso: new FormControl(),
      nationality: new FormControl(),
      numirn: new FormControl(),
      driver_license: new FormControl(),
      created_on: new FormControl(new Date().toLocaleDateString()),
      pob: new FormControl(),
      active: new FormControl(),
      status_name: new FormControl(),
      grade_name: new FormControl(),
      site_name: new FormControl(),
      cp: new FormControl()
    })
  }

  onClick() {
    alert('Création de l\'utilisateur [SENDFORM]');
  }
}
