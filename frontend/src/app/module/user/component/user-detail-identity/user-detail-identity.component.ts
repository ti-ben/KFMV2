import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User, UserUpdatePayload} from '@user/model';
import {UserHelper} from '@user/helper';
import {UserService} from "@user/service/user.service";
import {CardConfig, SelectConfig} from "@shared/model";
import {CardHelper} from "@shared/helper";
import {Site} from "@site/model";
import {SiteHelper} from "@site/helper";
import {SiteService} from "@site/service/site.service";
import {Status} from "@status/model";
import {StatusHelper} from "@status/helper";
import {StatusService} from "@status/service/status.service";

@Component({
  selector: 'app-user-detail-identity',
  templateUrl: './user-detail-identity.component.html',
  styleUrls: ['./user-detail-identity.component.scss']
})

export class UserDetailIdentityComponent implements OnInit, OnChanges {
  cardConfig: CardConfig = CardHelper.defaultConfigWithoutHeader();
  @Input() detail: User = UserHelper.getEmpty();
  siteSelectConfig!: SelectConfig;
  statusSelectConfig!: SelectConfig;
  formGroup!: FormGroup;

  constructor(public userService: UserService, public siteService: SiteService, public statusService: StatusService) {
  }

  //Construit le composant
  ngOnInit(): void {
    this.setSelectConfig();
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

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
      addressList: new FormControl([]),
      grade: new FormControl(this.detail.grade),
      status: new FormControl(this.detail.status)
    })
  }

  //todo update user information to db
  update(): void {
    if (this.formGroup.valid) {
      const payload: UserUpdatePayload = this.formGroup.value;
      this.userService.update(payload).subscribe();
    }
  }

  private setSelectConfig(): void {

    this.siteService.list().subscribe((list: Site[]) => {
      this.siteSelectConfig = {
        label: {label: 'form.user.label.site_name'},
        placeholder: 'form.user.placeholder.site_name',
        ctrl: this.getControl('site_name'),
        values: SiteHelper.toSiteOptionArray(list)
      }
    });

    this.statusService.list().subscribe((list: Status[]) => {
      this.statusSelectConfig = {
        label: {label: 'form.user.label.status_name'},
        placeholder: 'form.user.placeholder.status_name',
        ctrl: this.getControl('status_name'),
        values: StatusHelper.toStatusOptionArray(list)
      }
    });
  }
}
