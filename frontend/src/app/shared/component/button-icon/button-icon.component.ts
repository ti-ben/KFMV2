import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LabelWithParam } from '@shared/model';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss']
})
export class ButtonIconComponent implements OnInit {
  @Input() icon: string = 'fa fa-plus';
  @Input() labelWithParam: LabelWithParam = {label: 'button.default-add'};
  @Output() onClick = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
