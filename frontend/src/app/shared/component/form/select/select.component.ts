import {Component, Input, OnInit} from '@angular/core';
import {LabelWithParam} from "@shared/model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() label!: LabelWithParam;
  @Input() placeholder!: string;
  @Input() ctrl!: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
