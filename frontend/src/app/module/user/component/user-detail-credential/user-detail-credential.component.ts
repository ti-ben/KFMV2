import {Component, OnInit} from '@angular/core';
import {CardConfig} from "@shared/model";
import {CardHelper} from "@shared/helper/card.helper";
import {FormControl, FormGroup} from "@angular/forms";
import {UserHelper} from "@user/helper";
import {SelectConfig} from "@shared/model/select.config";
import {GradeService} from "@grade/service/grade.service";
import {Grade} from "@grade/model";
import {GradeHelper} from "@grade/helper";
import {ActifHelper} from "@shared/helper";

@Component({
  selector: 'app-user-detail-credential',
  templateUrl: './user-detail-credential.component.html',
  styleUrls: ['./user-detail-credential.component.scss']
})
export class UserDetailCredentialComponent implements OnInit {
  //@Input() detail: Credential = CredentialHelper.getEmpty();
  cardConfig: CardConfig = CardHelper.defaultConfigWithoutHeader();
  formGroup!: FormGroup;
  gradeSelectConfig!: SelectConfig;
  actifSelectConfig!: SelectConfig;

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

  private setSelectConfig(): void {

    this.gradeService.list().subscribe((list: Grade[]) => {
      this.gradeSelectConfig = {
        label: {label: 'form.credential.label.grade_name'},
        placeholder: 'form.credential.placeholder.grade_name',
        ctrl: this.getControl('grade_name'),
        values: GradeHelper.toGradeOptionArray(list)
      }
    });

    this.actifSelectConfig = {
      label: {label: 'form.credential.label.active'},
      placeholder: 'form.credential.placeholder.active',
      ctrl: this.getControl('active'),
      values: ActifHelper.toSelectOption()
    }
  }

  save() {
    alert('envoi du form credential');
  }
}
