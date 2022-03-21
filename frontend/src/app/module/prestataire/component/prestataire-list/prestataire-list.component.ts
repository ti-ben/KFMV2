import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {GenericTableConfig} from "@shared/model";
import {tap} from "rxjs/operators";
import {GenericTableHelper} from "@shared/helper";
import {Prestataire} from "@prestataire/model";
import {PrestataireService} from "@prestataire/service/prestataire.service";

@Component({
  selector: 'app-prestataire-list',
  templateUrl: './prestataire-list.component.html',
  styleUrls: ['./prestataire-list.component.scss']
})
export class PrestataireListComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});

  constructor(public prestataireService: PrestataireService) {
  }

  ngOnInit(): void {
    this.prestataireService.list().pipe(
      tap((list: Prestataire[]) => this.setConfig(list)))
      .subscribe();
  }

  private setConfig(list: Prestataire[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genPrestataireFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
