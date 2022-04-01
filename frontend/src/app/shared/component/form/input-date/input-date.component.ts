import { Component, Input, OnInit } from '@angular/core';
import { LabelWithParam } from '@shared/model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent implements OnInit {

  @Input() label!: LabelWithParam;
  @Input() placeholder!: string;
  @Input() ctrl!: FormControl;

  constructor() {
  }

  ngOnInit(): void {
  }

}
