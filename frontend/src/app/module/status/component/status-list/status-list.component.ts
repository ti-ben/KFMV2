import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {LabelWithParam} from '@shared/model';
import {NavigationService} from "@shared/service/navigation.service";
import {cloneDeep} from "lodash";
import {MenuHelper} from "@shared/helper/menu.helper";
import {Status} from "@status/model";
import {StatusService} from "@status/service/status.service";
import {
  WithMenuAndDestroyableBaseComponent
} from "@shared/component/with-menu-and-destroyable/with-menu-and-destroyable.component";

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})

export class StatusListComponent extends WithMenuAndDestroyableBaseComponent implements OnInit {
  list$ = new BehaviorSubject<Status[]>([]);
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  labelWithParam: LabelWithParam = {label: 'button.status-add'};

  constructor(public statusService: StatusService, public navigation: NavigationService) {
    super(navigation);
  }

  ngOnInit(): void {
    this.statusService.refresh$.pipe(
      takeUntil(this.destroyers$),
      switchMap((search: string) => this.statusService.list()),
      tap((list: Status[]) => {this.list$.next(list)}))
      .subscribe();

    this.search$.pipe(
      takeUntil(this.destroyers$),
      switchMap((search: string) => this.statusService.search({search: search})),
      tap((list: Status[]) => this.list$.next(list)))
      .subscribe();
  }

  create(): void {
    const item = cloneDeep(MenuHelper.statusCreateMenuItem());
    this.navigation.navigate(item);
  }

  detail(status: Status): void {
    const item = cloneDeep(MenuHelper.statusDetailMenuItem());
    item.link += status.status_id;
    this.navigation.navigate(item);
  }
}
