import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FieldType, GenericTableConfig, MenuItem } from '@shared/model';

@Component({
  selector: 'app-generic-data-table',
  templateUrl: './generic-data-table.component.html',
  styleUrls: ['./generic-data-table.component.scss']
})
export class GenericDataTableComponent implements OnInit {
  @Input() config!: GenericTableConfig;
  @Output() onClick = new EventEmitter<MenuItem>();
  fieldType = FieldType;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickHandler(action: MenuItem, item: any) {
    action.data = item;
    this.onClick.emit(action);
  }
}
