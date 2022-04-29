import {Component, Input, OnInit} from '@angular/core';
import {CardConfig} from "@shared/model";
import {CardHelper} from "@shared/helper/card.helper";
import {FormControl, FormGroup} from "@angular/forms";
import {UserHelper} from "@user/helper";
import {SelectConfig} from "@shared/model/select.config";
import {GradeService} from "@grade/service/grade.service";
import {Grade} from "@grade/model";
import {GradeHelper} from "@grade/helper";
import {ActifHelper} from "@shared/helper";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-user-detail-credential',
  templateUrl: './user-detail-credential.component.html',
  styleUrls: ['./user-detail-credential.component.scss']
})
export class UserDetailCredentialComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.defaultConfigWithoutHeader();
  //@Input() detail: Credential = CredentialHelper.getEmpty();
  formGroup!: FormGroup;
  gradeSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  actifSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  gradeList: Grade[] = [];

  constructor(public gradeService: GradeService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.setSelectConfig();
  }

  private initForm(): void {
    this.formGroup = UserHelper.toFormGroup();
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  create() {
    alert('envoi du form credential');
  }

  update() {
    alert('envoi du form credential');
  }

  private setSelectConfig(): void {

    this.gradeService.list().subscribe((list: Grade[]) => {
      this.gradeList = list;
      this.gradeSelectConfig$.next( {
        label: {label: 'form.credential.label.grade_name'},
        placeholder: 'form.credential.placeholder.grade_name',
        ctrl: this.getControl('grade_name'),
        values: GradeHelper.toGradeOptionArray(list)
      });
    });

    this.actifSelectConfig$.next( {
      label: {label: 'form.user.label.active'},
      placeholder: 'form.user.placeholder.active',
      ctrl: this.getControl('active'),
      values: ActifHelper.toSelectOption()
    });
  }

}
