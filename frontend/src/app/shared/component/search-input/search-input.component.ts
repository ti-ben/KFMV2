import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() placeholder: string = 'search-input.default-search';
  @Output() onValueChange = new EventEmitter<string>();
  search?: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
