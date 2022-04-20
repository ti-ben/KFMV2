import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Vehicule} from "@vehicule/model";
import {VehiculeHelper} from "@vehicule/helper";

@Component({
  selector: 'app-vehicule-detail-identity',
  templateUrl: './vehicule-detail-identity.component.html',
  styleUrls: ['./vehicule-detail-identity.component.scss']
})

export class VehiculeDetailIdentityComponent implements OnInit {
  @Input() detail: Vehicule = VehiculeHelper.getEmpty();
  formGroup!: FormGroup;

  constructor() { }
  ngOnInit(): void {}

  ngOnChanges(): void {
    this.formGroup = new FormGroup({
      dop: new FormControl(this.detail.dop),
      active: new FormControl(this.detail.active),
      price: new FormControl(this.detail.price),
      num_chassis: new FormControl(this.detail.num_chassis),
      brand: new FormControl(this.detail.brand),
      cde_carrosserie: new FormControl(this.detail.cde_carrosserie),
      genre: new FormControl(this.detail.genre),
      mom: new FormControl(this.detail.mom),
      mma: new FormControl(this.detail.mma),
      mmat: new FormControl(this.detail.mmat),
      mta: new FormControl(this.detail.mta),
      classe_enviro: new FormControl(this.detail.classe_enviro),
      nbr_km: new FormControl(this.detail.nbr_km),
      metrologie: new FormControl(this.detail.metrologie),
      picture: new FormControl(this.detail.picture),
      fuel: new FormControl(this.detail.fuel),
      type: new FormControl(this.detail.type),
      immat: new FormControl(this.detail.numberplate.num_plate)
    })
  }

  onClick() {
    alert('envoi du form');
  }
}
