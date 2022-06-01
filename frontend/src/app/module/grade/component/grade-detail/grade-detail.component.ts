import {Component, Input, OnInit} from '@angular/core';
import {CardConfig, SelectConfig} from "@shared/model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {GradeService} from "@grade/service/grade.service";
import {Grade, GradeUpdatePayload} from "@grade/model";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {CardHelper} from "@shared/helper/card.helper";
import {FormControl, FormGroup} from "@angular/forms";
import {GradeHelper} from "@grade/helper";
import {ActifHelper} from "@shared/helper";

@Component({
  selector: 'app-grade-detail',
  templateUrl: './grade-detail.component.html',
  styleUrls: ['./grade-detail.component.scss']
})

export class GradeDetailComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.gradeConfig('page.grade.detail.title');
  @Input() gDetail: Grade = GradeHelper.getEmpty();
  id: string = '';
  actifSelectConfig!: SelectConfig;
  formGroup!: FormGroup;

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public gradeService: GradeService) {
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  private initForm(grade: Grade): void {
    this.formGroup = GradeHelper.toFormGroup(grade);
  }

  ngOnInit(): void {
    this.gradeService.currentDetail$.subscribe((grade: Grade) => {
      this.gDetail = grade;
      this.initForm(grade);
      this.setSelectConfig();
    })
    //this.setSelectConfig();
    this.activatedRouter.params
      .pipe(
        tap((params: Params) => {
          if (!isNil(params['id'])) {
            this.id = params['id'];
            this.gradeService.detail(this.id);
          }
        })
      ).subscribe();
  }

  update(): void {
    console.log('mes valeurs', this.formGroup.value);
    if(this.formGroup.valid){
      const payload: GradeUpdatePayload = this.formGroup.value;
      payload.grade_id = this.gDetail.grade_id;
      this.gradeService.update(payload).subscribe();
    }
  }

  private setSelectConfig(): void {
    this.actifSelectConfig = {
      label: {label: 'form.grade.label.active'},
      placeholder: 'form.grade.placeholder.active',
      ctrl: this.getControl('active'),
      selected: this.gDetail.active,
      values: ActifHelper.toSelectOption()
    };
  }

}
