import {Component, Input, OnInit} from '@angular/core';
import {CardConfig} from "@shared/model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {GradeService} from "@grade/service/grade.service";
import {Grade, GradeUpdatePayload} from "@grade/model";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {CardHelper} from "@shared/helper/card.helper";
import {FormControl, FormGroup} from "@angular/forms";
import {GradeHelper} from "@grade/helper";

@Component({
  selector: 'app-grade-detail',
  templateUrl: './grade-detail.component.html',
  styleUrls: ['./grade-detail.component.scss']
})

export class GradeDetailComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.gradeConfig('page.grade.detail.title');
  @Input() detail: Grade = GradeHelper.getEmpty();
  id: string = '';
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
      this.detail = grade;
      this.initForm(grade);
    })
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
      payload.grade_id = this.detail.grade_id;
      this.gradeService.update(payload).subscribe();
    }
  }

  archive(): void{
    const payload: GradeUpdatePayload = this.formGroup.value;
    if(payload.active === "true")
    {
      payload.active = "false";
      this.gradeService.update(payload).subscribe();
    }
    payload.active ="true";
    this.gradeService.update(payload).subscribe();
  }
}
