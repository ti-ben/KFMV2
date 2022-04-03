import { Component, OnInit } from '@angular/core';
import {ApiResponse, CardConfig} from "@shared/model";
import {CardHelper} from "@shared/helper/card.helper";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GradeService} from "@grade/service/grade.service";
import {GradeCreatePayload} from "@grade/model";

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.scss']
})
export class GradeFormComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.gradeConfig('page.grade.create.title');
  formGroup!: FormGroup;

  constructor(public gradeService: GradeService) { }

  ngOnInit(): void {
    this.initForm();
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  save(): void {
    if (this.formGroup.valid) {
      const payload: GradeCreatePayload = this.formGroup.value;
      this.gradeService.create(payload).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.formGroup.reset();
        }
      })
    }
  }

  private initForm(): void {
    // Object SiteCreatePayload
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      comment: new FormControl('')
    });
  }

}
