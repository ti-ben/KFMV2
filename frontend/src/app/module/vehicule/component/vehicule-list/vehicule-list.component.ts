import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FieldDefinition, FieldType, GenericTableConfig } from '@shared/model';
import { GenericTableHelper } from '@shared/helper';
import {VehiculeService} from "@vehicule/service/vehicule.service";
import {Vehicule} from "@vehicule/model";

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.scss']
})
export class VehiculeListComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});
  constructor(public vehiculeService: VehiculeService) { }

  ngOnInit(): void {
    this.vehiculeService.list().pipe(
      tap((list: Vehicule[]) => this.setConfig(list)))
      .subscribe();
  }

  private setConfig(list: Vehicule[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genUserFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
