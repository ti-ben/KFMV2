import {Component, OnInit} from '@angular/core';
import {VehiculeService} from "@vehicule/service/vehicule.service";
import {BehaviorSubject} from 'rxjs';
import {Vehicule} from "@vehicule/model";
import {tap} from 'rxjs/operators';
import {AppRoute, GenericTableConfig, MenuItem, MenuItemType} from '@shared/model';
import {GenericTableHelper} from '@shared/helper';
import {Router} from "@angular/router";

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.scss']
})
export class VehiculeListComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});

  constructor(public vehiculeService: VehiculeService, public router: Router) {
  }

  ngOnInit(): void {
    this.vehiculeService.list().pipe(
      tap((list: Vehicule[]) => this.setConfig(list)))
      .subscribe();
  }

  handleClick(menuItem: MenuItem): void {
    switch (menuItem.type) {
      case MenuItemType.VEHICULE_DETAIL:
        this.router.navigate([`${menuItem.link}${menuItem.data.vehicule_id}`]).then();
        break;
    }
  }

  private setConfig(list: Vehicule[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genVehiculeFieldDefinitions();
    config.data = list;
    config.actions = [{
      icon: 'fa-eye',
      label: '',
      link: AppRoute.VEHICULE_DETAIL,
      active: false,
      type: MenuItemType.VEHICULE_DETAIL
    }]
    this.config$.next(config);
  }
}
