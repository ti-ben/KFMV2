import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User, UserUpdatePayload} from '@user/model';
import {UserHelper} from '@user/helper';
import {UserService} from "@user/service/user.service";
import {CardConfig, SelectConfig} from "@shared/model";
import {ActifHelper, CardHelper, DriverHelper, GenderHelper} from "@shared/helper";
import {Site} from "@site/model";
import {SiteHelper} from "@site/helper";
import {SiteService} from "@site/service/site.service";
import {Status} from "@status/model";
import {StatusHelper} from "@status/helper";
import {StatusService} from "@status/service/status.service";
import {BehaviorSubject, Subject} from 'rxjs';
import {GradeService} from '@grade/service/grade.service';

@Component({
  selector: 'app-user-detail-identity',
  templateUrl: './user-detail-identity.component.html',
  styleUrls: ['./user-detail-identity.component.scss']
})

export class UserDetailIdentityComponent implements OnInit, OnChanges {
  cardConfig: CardConfig = CardHelper.defaultConfigWithoutHeader();
  @Input() detail: User = UserHelper.getEmpty();

  siteSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  siteList: Site[] = [];

  statusSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  statusList: Status[] = [];

  driverSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  actifSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  genderSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);

  formGroup!: FormGroup;
  refresh$ = new Subject<any>();

  constructor(public userService: UserService, public siteService: SiteService, public statusService: StatusService, public gradeService: GradeService) {
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  private initForm(user: User): void {
    this.formGroup = UserHelper.toFormGroup(user);
  }

  //Construit le composant
  ngOnInit(): void {
    this.userService.currentDetail$.subscribe((user: User) => {
      this.detail = user;
      this.initForm(user);
      this.setSelectConfig();
    })
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
      site: new FormControl(this.detail.site.name), // MAIS ATTENTION DE BIEN REPRENDRE LE SITE AU MOMENT DE L ENVOI DU FORMULAIRE
      //address: new FormControl(this.detail.address.address_id),
      //grade: new FormControl(this.detail.grade.grade_id),
      status: new FormControl(this.detail.status.name)
    })
  }

  //todo update user information to db

  update(): void {
    //console.log(this.formGroup.controls.site.touched);
    if (this.formGroup.valid) {
      const payload: UserUpdatePayload = this.formGroup.value;
      payload.user_id = this.detail.user_id;
      if (this.formGroup.controls.site.touched) {
        payload.site = {site_id: payload.site};
      }
      if (this.formGroup.controls.status.touched) {
        payload.status = {status_id: payload.status};
      }
      //payload.grade = {grade_id: payload.grade}
      console.log('payload', payload)
      this.userService.update(payload).subscribe();
    }
  }

  private setSelectConfig(): void {

    this.siteService.list().subscribe((list: Site[]) => {
      this.siteList = list;
      this.siteSelectConfig$.next({
        label: {label: 'form.user.label.site_name'},
        placeholder: 'form.user.placeholder.site_name',
        ctrl: this.getControl('site'),
        selected: this.detail.active,
        values: SiteHelper.toSiteOptionArray(list)
      });
    });

    this.statusService.list().subscribe((list: Status[]) => {
      this.statusList = list;
      this.statusSelectConfig$.next({
        label: {label: 'form.user.label.status_name'},
        placeholder: 'form.user.placeholder.status_name',
        ctrl: this.getControl('status'),
        selected: this.detail.active,
        values: StatusHelper.toStatusOptionArray(list)
      });
    });

    this.driverSelectConfig$.next({
      label: {label: 'form.user.label.driver_license'},
      placeholder: 'form.user.placeholder.driver_license',
      ctrl: this.getControl('driver_license'),
      selected: this.detail.active,
      values: DriverHelper.getSelectOption()
    });

    this.genderSelectConfig$.next({
      label: {label: 'form.user.label.gender'},
      placeholder: 'form.user.placeholder.gender',
      ctrl: this.getControl('gender'),
      selected: this.detail.active,
      values: GenderHelper.genSelectOption()
    });

    this.actifSelectConfig$.next({
      label: {label: 'form.user.label.active'},
      placeholder: 'form.user.placeholder.active',
      ctrl: this.getControl('active'),
      selected: this.detail.active,
      values: ActifHelper.toSelectOption()
    });
  }
}
