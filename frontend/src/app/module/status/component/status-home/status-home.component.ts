import { Component, OnInit } from '@angular/core';
import {CardConfig} from "@shared/model";

@Component({
  selector: 'app-status-home',
  templateUrl: './status-home.component.html',
  styleUrls: ['./status-home.component.scss']
})
export class StatusHomeComponent implements OnInit {
  cardConfig!: CardConfig;

  constructor() { }

  ngOnInit(): void {
    this.cardConfig = {
      css: 'max-width-1024 p-large margin-auto margin-large m-b-small'
    };
  }

}
