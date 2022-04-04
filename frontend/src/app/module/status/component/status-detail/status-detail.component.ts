import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CardConfig, GenericTableConfig} from "@shared/model";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {StatusService} from "@status/service/status.service";
import {CardHelper} from "@shared/helper/card.helper";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Prestataire} from "@prestataire/model";
import {GenericTableHelper} from "@shared/helper";

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.scss']
})

export class StatusDetailComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.gradeConfig('page.status.detail.title');
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});
  id: string = '';
  formGroup!: FormGroup;

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public statusService: StatusService) {
  }

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(
        tap((params: Params) => {
          if (!isNil(params['id'])) {
            this.id = params['id'];
            this.statusService.detail(this.id);
          }
        })
      ).subscribe();
  }

  update(): void{
    alert('Mise à jour du prestataire');
  }

  archive(): void{
    alert('Archivage du prestataire');
  }

  private setConfig(list: Prestataire[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genPrestataireFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
