import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {LabelWithParam} from '@shared/model';
import {Numberplate} from "@numberplate/model";
import {NumberplateService} from "@numberplate/service/numberplate.service";
import {NavigationService} from "@shared/service/navigation.service";
import {cloneDeep} from "lodash";
import {MenuHelper} from "@shared/helper/menu.helper";
import {WithMenuAndDestroyableBaseComponent} from "@shared/component/with-menu-and-destroyable/with-menu-and-destroyable.component";

@Component({
  selector: 'app-numberplate-list',
  templateUrl: './numberplate-list.component.html',
  styleUrls: ['./numberplate-list.component.scss']
})

export class NumberplateListComponent extends WithMenuAndDestroyableBaseComponent implements OnInit {
  list$ = new BehaviorSubject<Numberplate[]>([]);
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  labelWithParam: LabelWithParam = {label: 'button.numberplate-add'};

  constructor(public numberplateService: NumberplateService, public navigation: NavigationService) {
    super(navigation);
  }

  ngOnInit(): void {
    this.numberplateService.refresh$.pipe(
      takeUntil(this.destroyers$),
      switchMap(() => this.numberplateService.list()),
      tap((list: Numberplate[]) => {this.list$.next(list)}))
      .subscribe();

    this.search$.pipe(
      takeUntil(this.destroyers$),
      switchMap((search: string) => this.numberplateService.search({search: search})),
      tap((list: Numberplate[]) => this.list$.next(list)))
      .subscribe();
  }

  create(): void {
    const item = cloneDeep(MenuHelper.numberplateCreateMenuItem());
    this.navigation.navigate(item);
  }

  detail(numberplate: Numberplate): void {
    const item = cloneDeep(MenuHelper.numberplateDetailMenuItem());
    item.link += numberplate.numberplate_id;
    this.navigation.navigate(item);
  }
}

