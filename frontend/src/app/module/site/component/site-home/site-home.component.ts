import {Component, OnInit} from '@angular/core';
import {CardConfig} from "@shared/model";

@Component({
  selector: 'app-site-home',
  templateUrl: './site-home.component.html',
  styleUrls: ['./site-home.component.scss']
})
export class SiteHomeComponent implements OnInit {
  cardConfig!: CardConfig;

  constructor() {
  }

  ngOnInit(): void {
    this.cardConfig = {
      css: 'max-width-1024 p-large margin-auto margin-large m-b-small'
    };
  }

}
