import {Component, Input, OnInit} from '@angular/core';
import {VehiculeHelper} from "@vehicule/helper";
import {Vehicule} from "@vehicule/model";

@Component({
  selector: 'app-vehicule-detail-summary',
  templateUrl: './vehicule-detail-summary.component.html',
  styleUrls: ['./vehicule-detail-summary.component.scss']
})
export class VehiculeDetailSummaryComponent implements OnInit {
  @Input() detail: Vehicule = VehiculeHelper.getEmpty();
  vehiculeService: any;

  constructor() { }

  ngOnInit(): void {
  }

}
