import {Component, OnInit} from '@angular/core';
import {PeriodService} from "@period/service/period.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-period-list',
  templateUrl: './period-list.component.html',
  styleUrls: ['./period-list.component.scss']
})

export class PeriodListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
