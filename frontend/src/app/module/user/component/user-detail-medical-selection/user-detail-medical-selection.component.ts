import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-detail-medical-selection',
  templateUrl: './user-detail-medical-selection.component.html',
  styleUrls: ['./user-detail-medical-selection.component.scss']
})
export class UserDetailMedicalSelectionComponent implements OnInit {
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
