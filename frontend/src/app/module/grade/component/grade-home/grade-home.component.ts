import { Component, OnInit } from '@angular/core';
import {CardConfig} from "@shared/model";

@Component({
  selector: 'app-grade-home',
  templateUrl: './grade-home.component.html',
  styleUrls: ['./grade-home.component.scss']
})
export class GradeHomeComponent implements OnInit {
  cardConfig!: CardConfig;
  constructor() { }

  ngOnInit(): void {
    this.cardConfig = {
      css: 'max-width-1024 p-large margin-auto margin-large m-b-small'
    };
  }

}
