import {Component, OnInit} from '@angular/core';
import {NumberplateService} from "@numberplate/service/numberplate.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiResponse, CardConfig, SelectConfig} from "@shared/model";
import {CardHelper} from "@shared/helper/card.helper";
import {NumberplateCreatePayload} from "@numberplate/model";

@Component({
  selector: 'app-numberplate-form',
  templateUrl: './numberplate-form.component.html',
  styleUrls: ['./numberplate-form.component.scss']
})
export class NumberplateFormComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.numberplateConfig('page.numberplate.create.title');
  actifSelectConfig!: SelectConfig;
  formGroup!: FormGroup;

  constructor(public numberplateService: NumberplateService) { }

  ngOnInit(): void {
    this.initForm();
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  create(): void {
    if (this.formGroup.valid) {
      const payload: NumberplateCreatePayload = this.formGroup.value;
      payload.dop = new Date(payload.dop);
      this.numberplateService.create(payload).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.formGroup.reset();
        }
      })
    }
  }

  private initForm(): void {
    this.formGroup = new FormGroup({
      num_plate: new FormControl(''),
      dop: new FormControl('')
    });
  }

}
