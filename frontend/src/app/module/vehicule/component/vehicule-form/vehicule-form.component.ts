import {Component, OnInit} from '@angular/core';
import {VehiculeCreatePayload} from "@vehicule/model";
import {ApiResponse, CardConfig} from '@shared/model';
import { CardHelper } from '@shared/helper/card.helper';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VehiculeService} from "@vehicule/service/vehicule.service";

@Component({
  selector: 'app-vehicule-form',
  templateUrl: './vehicule-form.component.html',
  styleUrls: ['./vehicule-form.component.scss']
})
export class VehiculeFormComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.defaultConfig('page.vehicule.create.title');
  formGroup!: FormGroup;

  constructor(public vehiculeService: VehiculeService) {
  }

  ngOnInit(): void {
    this.initForm();
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
    // Object VehiculeCreatePayload
    this.formGroup = new FormGroup({
      brand: new FormControl('', [Validators.required]),
      genre: new FormControl(''),
      dop: new FormControl(new Date()),
      cde_carrosserie: new FormControl(''),
      price: new FormControl(''),
      num_chassis: new FormControl(''),
      classe_enviro: new FormControl(''),
      metrologie: new FormControl(''),
      picture: new FormControl(''),
      nbr_km: new FormControl(''),
      fuel: new FormControl(''),
      type: new FormControl(''),
      mom: new FormControl(''),
      mma: new FormControl(''),
      mmat: new FormControl(''),
      mta: new FormControl(''),
      active: new FormControl('')
    });
  }
}
