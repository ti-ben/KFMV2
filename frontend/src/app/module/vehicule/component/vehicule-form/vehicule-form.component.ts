import {Component, Input, OnInit} from '@angular/core';
import {VehiculeHelper} from "@vehicule/helper";
import {Vehicule} from "@vehicule/model";
import { CardConfig } from '@shared/model';
import { CardHelper } from '@shared/helper/card.helper';

@Component({
  selector: 'app-vehicule-form',
  templateUrl: './vehicule-form.component.html',
  styleUrls: ['./vehicule-form.component.scss']
})
export class VehiculeFormComponent implements OnInit {
  @Input() form: Vehicule = VehiculeHelper.getEmpty();
  cardConfig: CardConfig = CardHelper.defaultConfig('page.vehicule.create.title');

  constructor() {
  }

  ngOnInit(): void {
  }

}
