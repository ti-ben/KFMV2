import { Component, OnInit } from '@angular/core';
import {CardConfig} from "@shared/model";

@Component({
  selector: 'app-prestataire-home',
  templateUrl: './prestataire-home.component.html',
  styleUrls: ['./prestataire-home.component.scss']
})
export class PrestataireHomeComponent implements OnInit {
  cardConfig!: CardConfig;

  constructor() { }

  ngOnInit(): void {
    this.cardConfig = {
      css: 'max-width-1024 p-large margin-auto margin-large m-b-small'
    };
  }

}
