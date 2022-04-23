import { Component, Input, OnInit } from '@angular/core';
import { LabelWithParam } from '@shared/model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() label!: LabelWithParam;
  @Input() placeholder!: string;
  @Input() ctrl!: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
