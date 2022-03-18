import { Component, Input, OnInit } from '@angular/core';
import { FieldType, GenericTableConfig } from '@shared/model';

@Component({
  selector: 'app-generic-data-table',
  templateUrl: './generic-data-table.component.html',
  styleUrls: ['./generic-data-table.component.scss']
})
export class GenericDataTableComponent implements OnInit {
  @Input() config!: GenericTableConfig;
  fieldType = FieldType;

  constructor() {
  }

  ngOnInit(): void {
  }

}
