import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {GenericTableConfig} from "@shared/model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {VehiculeService} from "@vehicule/service/vehicule.service";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {User} from "@user/model";
import {GenericTableHelper} from "@shared/helper";

@Component({
  selector: 'app-vehicule-detail',
  templateUrl: './vehicule-detail.component.html',
  styleUrls: ['./vehicule-detail.component.scss']
})
export class VehiculeDetailComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});
  id: string = '';

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public vehiculeService: VehiculeService) { }

  ngOnInit(): void {

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

  private setConfig(list: User[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genVehiculeFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
