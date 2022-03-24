import {Component, OnInit} from '@angular/core';
import {StatusService} from '@status/service/status.service';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AppRoute, GenericTableConfig, MenuItem, MenuItemType} from '@shared/model';
import {GenericTableHelper} from '@shared/helper';
import {Status} from "@status/model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});

  constructor(public statusService: StatusService, public router: Router) { }

  ngOnInit(): void {
    this.statusService.list().pipe(
      tap((list: Status[]) => this.setConfig(list)))
      .subscribe();
  }

  handleClick(menuItem: MenuItem): void {
    switch (menuItem.type) {
      case MenuItemType.STATUS_DETAIL:
        this.router.navigate([`${menuItem.link}${menuItem.data.status_id}`]).then();
        break;
    }
  }

  private setConfig(list: Status[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genStatusFieldDefinitions();
    config.data = list;
    config.actions = [{
      icon: 'fa-eye',
      label: '',
      link: AppRoute.STATUS_DETAIL,
      active: false,
      type: MenuItemType.STATUS_DETAIL
    }]
    this.config$.next(config);
  }
}
