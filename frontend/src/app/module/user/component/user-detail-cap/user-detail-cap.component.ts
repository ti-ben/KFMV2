import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-detail-cap',
  templateUrl: './user-detail-cap.component.html',
  styleUrls: ['./user-detail-cap.component.scss']
})
export class UserDetailCapComponent implements OnInit {
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
