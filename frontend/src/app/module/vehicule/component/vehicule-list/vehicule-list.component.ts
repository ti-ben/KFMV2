import { Component, OnInit } from '@angular/core';
import { VehiculeService } from "@vehicule/service/vehicule.service";
import { BehaviorSubject } from 'rxjs';
import { Vehicule } from "@vehicule/model";
import { tap } from 'rxjs/operators';
import { FieldDefinition, FieldType, GenericTableConfig } from '@shared/model';
import { GenericTableHelper } from '@shared/helper';

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
    config.fields = GenericTableHelper.genVehiculeFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
