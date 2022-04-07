import {Component, OnInit} from '@angular/core';
import {VehiculeCreatePayload} from "@vehicule/model";
import {ApiResponse, CardConfig} from '@shared/model';
import {CardHelper} from '@shared/helper/card.helper';
import {FormControl, FormGroup} from "@angular/forms";
import {VehiculeService} from "@vehicule/service/vehicule.service";
import {VehiculeHelper} from "@vehicule/helper";
import {ActifHelper, GenreHelper} from "@shared/helper";
import {SelectConfig} from "@shared/model/select.config";

@Component({
  selector: 'app-vehicule-form',
  templateUrl: './vehicule-form.component.html',
  styleUrls: ['./vehicule-form.component.scss']
})
export class VehiculeFormComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.defaultConfig('page.vehicule.create.title');
  formGroup!: FormGroup;
  //vehiculeHelper = VehiculeHelper;
  actifSelectConfig!: SelectConfig;
  genreSelectConfig!: SelectConfig;

  constructor(public vehiculeService: VehiculeService) {
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
      const payload: VehiculeCreatePayload = this.formGroup.value;
      payload.dop = new Date(payload.dop);
      this.vehiculeService.create(payload).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.formGroup.reset();
        }
      })
    }
  }

  private initForm(): void {
    this.formGroup = VehiculeHelper.toFormGroup();
  }

  private setSelectConfig(): void {

    this.actifSelectConfig = {
      label: {label: 'form.vehicule.label.active'},
      placeholder: 'form.vehicule.placeholder.active',
      ctrl: this.getControl('active'),
      values: ActifHelper.toSelectOption()
    }

    this.genreSelectConfig = {
      label: {label: 'form.vehicule.label.genre'},
      placeholder: 'form.vehicule.placeholder.genre',
      ctrl: this.getControl('genre'),
      values: GenreHelper.toSelectOption()
    }
  }
}
