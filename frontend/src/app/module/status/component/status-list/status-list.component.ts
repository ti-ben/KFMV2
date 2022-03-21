import {Component, OnInit} from '@angular/core';
import {StatusService} from '@status/service/status.service';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {GenericTableConfig} from '@shared/model';
import {GenericTableHelper} from '@shared/helper';
import {Status} from "@status/model";

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});
  constructor(public statusService: StatusService) { }

  ngOnInit(): void {
    this.statusService.list().pipe(
      tap((list: Status[]) => this.setConfig(list)))
      .subscribe();
  }

  private setConfig(list: Status[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genStatusFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
