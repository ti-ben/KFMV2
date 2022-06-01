import {Component, OnInit} from '@angular/core';
import {CardConfig, TabItem, TabItemAction} from "@shared/model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {VehiculeService} from "@vehicule/service/vehicule.service";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {User} from "@user/model";
import {Vehicule} from "@vehicule/model";

@Component({
  selector: 'app-vehicule-detail',
  templateUrl: './vehicule-detail.component.html',
  styleUrls: ['./vehicule-detail.component.scss']
})

export class VehiculeDetailComponent implements OnInit {
  id: string = '';
  tabs: TabItem[] = [];
  VehiculeDetailTab = TabItemAction;
  currentTab: TabItemAction = TabItemAction.VEHICULE_IDENTITY;
  cardConfig!: CardConfig;

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public vehiculeService: VehiculeService) {
  }

  ngOnInit(): void {
    this.cardConfig = {
      css: 'max-width-1400 p-large margin-auto margin-large'
    };
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
    this.vehiculeService.currentDetail$.subscribe((data: Vehicule) => {
      this.cardConfig.headerConfig = {title: {label: `${data.brand} ${data.numberplate.num_plate}`}}
    })
  }

  private setTab(): void {
    this.tabs = [
      {label: 'Informations', type: TabItemAction.VEHICULE_IDENTITY},
      {label: 'ADR', type: TabItemAction.VEHICULE_ADR},
      {label: 'Métrologie', type: TabItemAction.VEHICULE_METROLOGY},
      {label: 'Contrôle technique', type: TabItemAction.VEHICULE_TECHNICAL_CONTROL},
      {label: 'Intervention technique', type: TabItemAction.VEHICULE_TECHNICAL_INTERVENTION},
      {label: 'Immatriculation', type: TabItemAction.VEHICULE_NUMBERPLATE}
    ]
  }

}
