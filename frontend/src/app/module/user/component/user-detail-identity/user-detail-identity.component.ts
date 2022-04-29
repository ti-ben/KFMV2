import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User, UserUpdatePayload} from '@user/model';
import {UserHelper} from '@user/helper';
import {UserService} from "@user/service/user.service";
import {CardConfig, SelectConfig} from "@shared/model";
import {ActifHelper, CardHelper, DriverHelper} from "@shared/helper";
import {Site} from "@site/model";
import {SiteHelper} from "@site/helper";
import {SiteService} from "@site/service/site.service";
import {Status} from "@status/model";
import {StatusHelper} from "@status/helper";
import {StatusService} from "@status/service/status.service";
import {BehaviorSubject} from 'rxjs';
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
  statusSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  driverSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  actifSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  siteList: Site[] = [];
  statusList: Status[] = [];
  formGroup!: FormGroup;


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
    })
    this.setSelectConfig();
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
      site: new FormControl(this.detail.site.site_id), // MAIS ATTENTION DE BIEN REPRENDRE LE SITE AU MOMENT DE L ENVOI DU FORMULAIRE
      address: new FormControl([]),
      //grade: new FormControl(this.detail.grade.grade_id),
      status: new FormControl(this.detail.status.status_id)
    })
  }

  //todo update user information to db
  update(): void {
    console.log('mes valeurs', this.formGroup.value); // A retirer (debug)
    if (this.formGroup.valid) {
      const payload: UserUpdatePayload = this.formGroup.value;
      // LIER LES OBJECTS AUX CLES
      payload.user_id = this.detail.user_id;
      payload.site = {site_id: payload.site};
      payload.status = {status_id: payload.status};
      console.log('payload', payload);
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
        values: SiteHelper.toSiteOptionArray(list)
      });
    });

    this.statusService.list().subscribe((list: Status[]) => {
      this.statusList = list;
      this.statusSelectConfig$.next({
        label: {label: 'form.user.label.status_name'},
        placeholder: 'form.user.placeholder.status_name',
        ctrl: this.getControl('status'),
        values: StatusHelper.toStatusOptionArray(list)
      });
    });

    this.driverSelectConfig$.next({
      label: {label: 'form.user.label.driver_license'},
      placeholder: 'form.user.placeholder.driver_license',
      ctrl: this.getControl('driver_license'),
      values: DriverHelper.getSelectOption()
    });

    this.actifSelectConfig$.next( {
      label: {label: 'form.user.label.active'},
      placeholder: 'form.user.placeholder.active',
      ctrl: this.getControl('active'),
      values: ActifHelper.toSelectOption()
    });
  }
}
