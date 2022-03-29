import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardHeaderConfig} from '@shared/model/card-header.config';
import {MenuItem} from '@shared/model';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent implements OnInit {
  @Input() config!: CardHeaderConfig;
  @Output() onActionClick = new EventEmitter<MenuItem>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
