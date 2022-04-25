import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { SelectConfig } from '@shared/model/select.config';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() config!: SelectConfig;
  @Output() onBlur = new EventEmitter<void>();



  constructor() {
  }

  ngOnInit(): void {
    console.log('ca init select');
    console.log('my config', this.config.values);
  }

  ngOnChange() {
    console.log('ca change');
  }
}
