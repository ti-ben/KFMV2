import {Component, OnInit} from '@angular/core';
import {UserCreatePayload} from '@user/model';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiResponse, CardConfig} from "@shared/model";
import {CardHelper} from "@shared/helper/card.helper";
import {UserService} from "@user/service/user.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.defaultConfig('page.user.create.title');
  formGroup!: FormGroup;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  save(): void {
    if (this.formGroup.valid) {
      const payload: UserCreatePayload = this.formGroup.value;
      this.userService.create(payload).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.formGroup.reset();
        }
      })
    }
  }

  private initForm(): void {
    // Object UserCreatePayload
    this.formGroup = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
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
      created_on: new FormControl(new Date().toLocaleDateString('')),
      pob: new FormControl(''),
      active: new FormControl(''),
      status_name: new FormControl(''),
      grade_name: new FormControl(''),
      site_name: new FormControl(''),
      cp: new FormControl('')
    })
  }
}
