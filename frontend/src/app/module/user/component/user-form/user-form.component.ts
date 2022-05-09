import {Component, OnInit} from '@angular/core';
import {UserCreatePayload} from '@user/model';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiResponse, CardConfig, SelectConfig} from "@shared/model";
import {UserService} from "@user/service/user.service";
import {UserHelper} from '@user/helper';
import {SiteService} from '@site/service/site.service';
import {Site} from '@site/model';
import {SiteHelper} from '@site/helper';
import {ActifHelper, CardHelper, DriverHelper, GenderHelper} from '@shared/helper';
import {Status} from "@status/model";
import {StatusService} from "@status/service/status.service";
import {StatusHelper} from "@status/helper";
import {GradeService} from "@grade/service/grade.service";
import {Grade} from "@grade/model";
import {GradeHelper} from "@grade/helper";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.defaultConfig('page.user.create.title');
  formGroup!: FormGroup;
  genderSelectConfig!: SelectConfig;
  actifSelectConfig!: SelectConfig;
  siteSelectConfig!: SelectConfig;
  driverSelectConfig!: SelectConfig;
  statusSelectConfig!: SelectConfig;
  gradeSelectConfig!: SelectConfig;

  constructor(public userService: UserService, public siteService: SiteService, public statusService: StatusService, public gradeService: GradeService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.setSelectConfig();
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  save(): void {
    if (this.formGroup.valid) {
      const payload: UserCreatePayload = this.formGroup.value;
      payload.site = {site_id: payload.site}
      payload.status = {status_id: payload.status}
      this.userService.create(payload).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.formGroup.reset();
        }
      })
    }
  }

  private initForm(): void {
    this.formGroup = UserHelper.toFormGroup();
  }

  private setSelectConfig(): void {
    this.driverSelectConfig = {
      label: {label: 'form.user.label.driver_license'},
      placeholder: 'form.user.placeholder.driver_license',
      ctrl: this.getControl('driver_license'),
      values: DriverHelper.getSelectOption()
    };

    this.siteService.list().subscribe((list: Site[]) => {
      this.siteSelectConfig = {
        label: {label: 'form.user.label.site_name'},
        placeholder: 'form.user.placeholder.site_name',
        ctrl: this.getControl('site'),
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

    this.gradeService.list().subscribe((list: Grade[]) => {
      this.gradeSelectConfig = {
        label: {label: 'form.user.label.grade_name'},
        placeholder: 'form.user.placeholder.grade_name',
        ctrl: this.getControl('grade_name'),
        values: GradeHelper.toGradeOptionArray(list)
      }
    });

    this.genderSelectConfig = {
      label: {label: 'form.user.label.gender'},
      placeholder: 'form.user.placeholder.gender',
      ctrl: this.getControl('gender'),
      values: GenderHelper.genSelectOption()
    };

    this.actifSelectConfig = {
      label: {label: 'form.user.label.active'},
      placeholder: 'form.user.placeholder.active',
      ctrl: this.getControl('active'),
      values: ActifHelper.toSelectOption()
    };
  }
}
