import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CardConfig} from "@shared/model";
import {CardHelper} from "@shared/helper";

@Component({
  selector: 'app-user-detail-cap',
  templateUrl: './user-detail-cap.component.html',
  styleUrls: ['./user-detail-cap.component.scss']
})
export class UserDetailCapComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.defaultConfig('page.user.session_cap.title');
  formGroup!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({

    })
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

 save() {
    alert('envoi du form');
  }
}
