import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabItem } from '@shared/model';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() list:TabItem[] = [];
  @Output() clickHandler = new EventEmitter<TabItem>();
  constructor() { }

  ngOnInit(): void {
  }

}
