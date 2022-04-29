import {Component, Input, OnInit} from '@angular/core';
import {CardConfig, SelectConfig} from "@shared/model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {ActifHelper} from "@shared/helper";
import {NumberplateService} from "@numberplate/service/numberplate.service";
import {Numberplate, NumberplateUpdatePayload} from "@numberplate/model";
import {CardHelper} from "@shared/helper/card.helper";
import {FormControl, FormGroup} from "@angular/forms";
import {NumberplateHelper} from "@numberplate/helper";

@Component({
  selector: 'app-numberplate-detail',
  templateUrl: './numberplate-detail.component.html',
  styleUrls: ['./numberplate-detail.component.scss']
})

export class NumberplateDetailComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.numberplateConfig('page.numberplate.detail.title');
  @Input() detail: Numberplate = NumberplateHelper.getEmpty();
  id: string = '';
  actifSelectConfig!: SelectConfig;
  formGroup!: FormGroup;

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public numberplateService: NumberplateService) {
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  private initForm(numberplate: Numberplate): void {
    this.formGroup = NumberplateHelper.toFormGroup(numberplate);
  }

  ngOnInit(): void {
    this.numberplateService.currentDetail$.subscribe((numberplate: Numberplate) => {
      this.detail = numberplate;
      this.initForm(numberplate);
    })
    this.setSelectConfig();
    this.activatedRouter.params
      .pipe(
        tap((params: Params) => {
          if (!isNil(params['id'])) {
            this.id = params['id'];
            this.numberplateService.detail(this.id);
          }
        })
      ).subscribe();
  }

  update(): void {
    console.log('mes valeurs', this.formGroup.value); // A retirer (debug)
    if (this.formGroup.valid) {
      const payload: NumberplateUpdatePayload = this.formGroup.value;
      payload.numberplate_id = this.detail.numberplate_id;
      console.log('payload', payload); // A retirer (debug)
      this.numberplateService.update(payload).subscribe();
    }
  }

/*
    archive(): void {
      alert('Archivage de la plaque');
    }
*/

  private setSelectConfig(): void {
    this.actifSelectConfig = {
      label: {label: 'form.numberplate.label.active'},
      placeholder: 'form.numberplate.placeholder.active',
      ctrl: this.getControl('active'),
      values: ActifHelper.toSelectOption()
    };
  }

}
