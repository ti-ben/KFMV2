import {Component, OnInit} from '@angular/core';
import {StatusService} from '@status/service/status.service';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CardConfig, MenuItem, MenuItemType} from '@shared/model';
import {Status} from "@status/model";
import {NavigationService} from "@shared/service/navigation.service";
import {cloneDeep} from "lodash";
import {MenuHelper} from "@shared/helper/menu.helper";

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent implements OnInit {
  list$ = new BehaviorSubject<Status[]>([]);
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  status$ = new BehaviorSubject<Status | undefined>(undefined);
  cardConfig!: CardConfig;

  constructor(public statusService: StatusService, public navigation: NavigationService) {
  }

  ngOnInit(): void {
    this.cardConfig = {
      css: 'max-width-1024 p-large margin-auto margin-large'
    };
    this.statusService.list().pipe(
      tap((list: Status[]) => this.list$.next(list)))
      .subscribe();
  }

  handleClick(menuItem: MenuItem): void {
    switch (menuItem.type) {
      case MenuItemType.STATUS_DETAIL:
        const item = cloneDeep(MenuHelper.statusDetailMenuItem());
        item.link += menuItem.data.status_id;
        this.navigation.navigate(item);
        break;
    }
  }
}
