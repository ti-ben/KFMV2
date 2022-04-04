import {Component, Input, OnInit} from '@angular/core';
import {LabelWithParam} from "@shared/model";
import {FormControl} from "@angular/forms";
import { SelectConfig } from '@shared/model/select.config';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() config!:SelectConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
