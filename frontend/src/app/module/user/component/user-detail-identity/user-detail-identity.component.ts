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
  @Input() uDetail: User = UserHelper.getEmpty();

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
      this.uDetail = user;
      this.initForm(user);
      this.setSelectConfig();
    })
  }

  // Affiche les informations du user sélectionné
  ngOnChanges(): void {
    this.formGroup = new FormGroup({
      firstname: new FormControl(this.uDetail.firstname),
      lastname: new FormControl(this.uDetail.lastname),
      gender: new FormControl(this.uDetail.gender),
      avatar: new FormControl(this.uDetail.avatar),
      dob: new FormControl(this.uDetail.dob),
      email: new FormControl(this.uDetail.email),
      telpro: new FormControl(this.uDetail.telpro),
      telperso: new FormControl(this.uDetail.telperso),
      nationality: new FormControl(this.uDetail.nationality),
      numirn: new FormControl(this.uDetail.numirn),
      driver_license: new FormControl(this.uDetail.driver_license),
      created_on: new FormControl(this.uDetail.created_on),
      pob: new FormControl(this.uDetail.pob),
      active: new FormControl(this.uDetail.active),
      site: new FormControl(this.uDetail.site.name), // MAIS ATTENTION DE BIEN REPRENDRE LE SITE AU MOMENT DE L ENVOI DU FORMULAIRE
      //address: new FormControl(this.detail.address.address_id),
      //grade: new FormControl(this.detail.grade.grade_id),
      status: new FormControl(this.uDetail.status.name)
    })
  }

  //todo update user information to db

  update(): void {
    //console.log(this.formGroup.controls.site.touched);
    if (this.formGroup.valid) {
      const payload: UserUpdatePayload = this.formGroup.value;
      payload.user_id = this.uDetail.user_id;
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
        selected: {value: this.uDetail.site.site_id , label: this.uDetail.site.name },
        values: SiteHelper.toSiteOptionArray(list)
      });
    });

    this.statusService.list().subscribe((list: Status[]) => {
      this.statusList = list;
      this.statusSelectConfig$.next({
        label: {label: 'form.user.label.status_name'},
        placeholder: 'form.user.placeholder.status_name',
        ctrl: this.getControl('status'),
        selected: {value: this.uDetail.status.status_id , label: this.uDetail.status.name },
        values: StatusHelper.toStatusOptionArray(list)
      });
    });

    this.driverSelectConfig$.next({
      label: {label: 'form.user.label.driver_license'},
      placeholder: 'form.user.placeholder.driver_license',
      ctrl: this.getControl('driver_license'),
      selected: {value: this.uDetail.driver_license , label: this.uDetail.driver_license },
      values: DriverHelper.getSelectOption()
    });

    this.genderSelectConfig$.next({
      label: {label: 'form.user.label.gender'},
      placeholder: 'form.user.placeholder.gender',
      ctrl: this.getControl('gender'),
      selected: {value: this.uDetail.gender , label: this.uDetail.gender },
      values: GenderHelper.genSelectOption()
    });

    this.actifSelectConfig$.next({
      label: {label: 'form.user.label.active'},
      placeholder: 'form.user.placeholder.active',
      ctrl: this.getControl('active'),
      selected: {value: this.uDetail.active, label: this.uDetail.active},
      values: ActifHelper.actifSelectOption()
    });
  }
}
