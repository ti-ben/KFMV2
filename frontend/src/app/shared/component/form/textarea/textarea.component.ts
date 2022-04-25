import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output() onBlur = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
