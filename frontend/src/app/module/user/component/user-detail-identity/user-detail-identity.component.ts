import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User, UserCreatePayload} from '@user/model';
import {UserHelper} from '@user/helper';
import {UserService} from "@user/service/user.service";
import {CardConfig} from "@shared/model";
import {CardHelper} from "@shared/helper";

@Component({
  selector: 'app-user-detail-identity',
  templateUrl: './user-detail-identity.component.html',
  styleUrls: ['./user-detail-identity.component.scss']
})

export class UserDetailIdentityComponent implements OnInit, OnChanges {
  cardConfig: CardConfig = CardHelper.defaultConfigWithoutHeader();
  @Input() detail: User = UserHelper.getEmpty();
  formGroup!: FormGroup;

  constructor(public userService: UserService) {
  }

  //Construit le composant
  ngOnInit(): void {}

  // Affiche les informations du user sélectionné
  ngOnChanges(): void {
    this.formGroup = new FormGroup({
      firstname: new FormControl(this.detail.firstname),
      lastname: new FormControl(this.detail.lastname),
      gender: new FormControl(this.detail.gender),
      avatar: new FormControl(this.detail.avatar),
      dob: new FormControl(this.detail.dob),
      email: new FormControl(this.detail.email),
      telpro: new FormControl(this.detail.telpro),
      telperso: new FormControl(this.detail.telperso),
      nationality: new FormControl(this.detail.nationality),
      numirn: new FormControl(this.detail.numirn),
      driver_license: new FormControl(this.detail.driver_license),
      created_on: new FormControl(this.detail.created_on),
      pob: new FormControl(this.detail.pob),
      active: new FormControl(this.detail.active),
      site: new FormControl(this.detail.site),
      //addressList: new FormControl([]),
      grade : new FormControl(this.detail.grade),
      status: new FormControl(this.detail.status)
    })
  }

  //todo update user information to db
  update(): void {
    if (this.formGroup.valid) {
      const payload: UserCreatePayload = this.formGroup.value;
      this.userService.update(payload).subscribe();
    }
  }
}
