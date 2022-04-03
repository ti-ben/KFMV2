import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CardConfig, GenericTableConfig} from "@shared/model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {GenericTableHelper} from "@shared/helper";
import {NumberplateService} from "@numberplate/service/numberplate.service";
import {Numberplate} from "@numberplate/model";
import {CardHelper} from "@shared/helper/card.helper";

@Component({
  selector: 'app-numberplate-detail',
  templateUrl: './numberplate-detail.component.html',
  styleUrls: ['./numberplate-detail.component.scss']
})

export class NumberplateDetailComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.gradeConfig('page.numberplate.detail.title');
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});
  id: string = '';

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public numberplateService: NumberplateService) {
  }

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(
        tap((params: Params) => {
          if (!isNil(params['id'])) {
            this.id = params['id'];
            this.numberplateService.detail(this.id);
          }
        })
      ).subscribe();
  }

  update(): void{
    alert('Mise à jour de la plaque');
  }

  archive(): void{
    alert('Archivage de la plaque');
  }

  private setConfig(list: Numberplate[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genNumberplateFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
