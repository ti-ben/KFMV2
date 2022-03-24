import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-detail-adr',
  templateUrl: './user-detail-adr.component.html',
  styleUrls: ['./user-detail-adr.component.scss']
})
export class UserDetailAdrComponent implements OnInit {
  formGroup!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({

    })
  }

  onClick() {
    alert('envoi du form');
  }

}
