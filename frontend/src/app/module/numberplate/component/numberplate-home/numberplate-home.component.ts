import { Component, OnInit } from '@angular/core';
import {CardConfig} from "@shared/model";

@Component({
  selector: 'app-numberplate-home',
  templateUrl: './numberplate-home.component.html',
  styleUrls: ['./numberplate-home.component.scss']
})
export class NumberplateHomeComponent implements OnInit {
  cardConfig!: CardConfig;

  constructor() { }

  ngOnInit(): void {
    this.cardConfig = {
      css: 'max-width-1024 p-large margin-auto margin-large m-b-small'
    };
  }

}
