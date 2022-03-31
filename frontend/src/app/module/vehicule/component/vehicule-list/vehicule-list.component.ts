import { Component, OnInit } from '@angular/core';
import { VehiculeService } from "@vehicule/service/vehicule.service";
import { BehaviorSubject } from 'rxjs';
import { Vehicule } from "@vehicule/model";
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { LabelWithParam } from '@shared/model';
import { cloneDeep } from "lodash";
import { MenuHelper } from "@shared/helper/menu.helper";
import { NavigationService } from "@shared/service/navigation.service";
import { WithMenuAndDestroyableBaseComponent } from '@shared/component/with-menu-and-destroyable/with-menu-and-destroyable.component';
import { User } from '@user/model';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.scss']
})

export class VehiculeListComponent extends WithMenuAndDestroyableBaseComponent implements OnInit {
  list$ = new BehaviorSubject<Vehicule[]>([]);
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  labelWithParam: LabelWithParam = {label: 'button.car-add'};

  constructor(public vehiculeService: VehiculeService, public navigation: NavigationService) {
    super(navigation);
  }

  ngOnInit(): void {
    this.search$.pipe(
      takeUntil(this.destroyers$),
      switchMap((search: string) => this.vehiculeService.search({search: search})),
      tap((list: Vehicule[]) => this.list$.next(list)))
      .subscribe();
  }

  create(): void {
    const item = cloneDeep(MenuHelper.employeeCreateMenuItem());
    this.navigation.navigate(item);
  }

  detail(vehicule: Vehicule): void {
    const item = cloneDeep(MenuHelper.carDetailMenuItem());
    item.link += vehicule.vehicule_id;
    this.navigation.navigate(item);

  }
}
