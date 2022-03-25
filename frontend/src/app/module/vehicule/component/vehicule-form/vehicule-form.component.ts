import {Component, Input, OnInit} from '@angular/core';
import {VehiculeHelper} from "@vehicule/helper";
import {Vehicule} from "@vehicule/model";

@Component({
  selector: 'app-vehicule-form',
  templateUrl: './vehicule-form.component.html',
  styleUrls: ['./vehicule-form.component.scss']
})
export class VehiculeFormComponent implements OnInit {
  @Input() form: Vehicule = VehiculeHelper.getEmpty();

  constructor() {
  }

  ngOnInit(): void {
  }

}
