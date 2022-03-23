import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {AppRoute, GenericTableConfig, MenuItem, MenuItemType} from "@shared/model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PrestataireService} from "@prestataire/service/prestataire.service";
import {tap} from "rxjs/operators";
import {Prestataire} from "@prestataire/model";
import {GenericTableHelper} from "@shared/helper";
import {isNil} from "lodash";

@Component({
  selector: 'app-prestataire-detail',
  templateUrl: './prestataire-detail.component.html',
  styleUrls: ['./prestataire-detail.component.scss']
})
export class PrestataireDetailComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});
  id: string = '';

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public prestataireService: PrestataireService) {
  }

  ngOnInit(): void {

    this.activatedRouter.params
      .pipe(
        tap((params: Params) => {
          if (!isNil(params['id'])) {
            this.id = params['id'];
            this.prestataireService.detail(this.id);
          }
        })
      ).subscribe();
  }

  private setConfig(list: Prestataire[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genPrestataireFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
