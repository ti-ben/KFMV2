import { Component, Input, OnInit } from '@angular/core';
import { LabelWithParam } from '@shared/model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() label!: LabelWithParam;
  @Input() placeholder!: string;
  @Input() ctrl!: FormControl;

  constructor() {
  }

  ngOnInit(): void {
  }

}
