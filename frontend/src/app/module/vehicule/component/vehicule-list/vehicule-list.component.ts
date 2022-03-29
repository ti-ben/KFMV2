import {Component, OnInit} from '@angular/core';
import {VehiculeService} from "@vehicule/service/vehicule.service";
import {BehaviorSubject} from 'rxjs';
import {Vehicule} from "@vehicule/model";
import {tap} from 'rxjs/operators';
import {CardConfig, MenuItem, MenuItemType} from '@shared/model';
import {cloneDeep} from "lodash";
import {MenuHelper} from "@shared/helper/menu.helper";
import {NavigationService} from "@shared/service/navigation.service";

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.scss']
})

export class VehiculeListComponent implements OnInit {
  list$ = new BehaviorSubject<Vehicule[]>([]);
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  vehicule$ = new BehaviorSubject<Vehicule | undefined>(undefined);
  cardConfig!: CardConfig;

  constructor(public vehiculeService: VehiculeService, public navigation: NavigationService) {
  }

  ngOnInit(): void {
    this.cardConfig = {
      css: 'max-width-1024 p-large margin-auto margin-large'
    };
    this.vehiculeService.list().pipe(
      tap((list: Vehicule[]) => this.list$.next(list)))
      .subscribe();
  }

  handleClick(menuItem: MenuItem): void {
    switch (menuItem.type) {
      case MenuItemType.VEHICULE_DETAIL:
        const item = cloneDeep(MenuHelper.carDetailMenuItem());
        item.link += menuItem.data.vehicule_id;
        this.navigation.navigate(item);
        break;
    }
  }
}
