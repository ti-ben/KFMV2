import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {GenericTableConfig, TabItem, TabItemAction} from "@shared/model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {VehiculeService} from "@vehicule/service/vehicule.service";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {User} from "@user/model";
import {GenericTableHelper} from "@shared/helper";
import {Vehicule} from "@vehicule/model";

@Component({
  selector: 'app-vehicule-detail',
  templateUrl: './vehicule-detail.component.html',
  styleUrls: ['./vehicule-detail.component.scss']
})

export class VehiculeDetailComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});
  id: string = '';
  tabs: TabItem[] = [];
  VehiculeDetailTab = TabItemAction;
  currentTab: TabItemAction = TabItemAction.VEHICULE_IDENTITY;
  constructor(public router: Router, public activatedRouter: ActivatedRoute, public vehiculeService: VehiculeService) { }

  ngOnInit(): void {
    this.setTab();
    this.activatedRouter.params
      .pipe(
        tap((params: Params) => {
          if (!isNil(params['id'])) {
            this.id = params['id'];
            this.vehiculeService.detail(this.id);
          }
        })
      ).subscribe();
  }

  private setTab(): void {
    this.tabs = [
      {label: 'Identité', type: TabItemAction.VEHICULE_IDENTITY},
      {label: 'ADR', type: TabItemAction.VEHICULE_ADR},
      {label: 'Métrologie', type: TabItemAction.VEHICULE_METROLOGY},
      {label: 'Contrôle technique', type: TabItemAction.VEHICULE_TECHNICAL_CONTROL},
      {label: 'Intervention technique', type: TabItemAction.VEHICULE_TECHNICAL_INTERVENTION}
    ]
  }

  private setConfig(list: Vehicule[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genVehiculeFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
