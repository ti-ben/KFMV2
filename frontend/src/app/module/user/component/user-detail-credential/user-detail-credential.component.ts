import {Component, OnInit} from '@angular/core';
import {CardConfig} from "@shared/model";
import {CardHelper} from "@shared/helper/card.helper";

@Component({
  selector: 'app-user-detail-credential',
  templateUrl: './user-detail-credential.component.html',
  styleUrls: ['./user-detail-credential.component.scss']
})
export class UserDetailCredentialComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.defaultConfig('page.credential.detail.title');

  constructor() { }

  ngOnInit(): void {
  }

}
