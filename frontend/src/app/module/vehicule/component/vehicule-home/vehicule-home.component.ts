import { Component, OnInit } from '@angular/core';
import {CardConfig} from "@shared/model";

@Component({
  selector: 'app-vehicule-home',
  templateUrl: './vehicule-home.component.html',
  styleUrls: ['./vehicule-home.component.scss']
})
export class VehiculeHomeComponent implements OnInit {
  cardConfig!: CardConfig;
  constructor() { }

  ngOnInit(): void {
    this.cardConfig = {
      css: 'max-width-1024 p-large margin-auto margin-large m-b-small'
    };
  }

}
