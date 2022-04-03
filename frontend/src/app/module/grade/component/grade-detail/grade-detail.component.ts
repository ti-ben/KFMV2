import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CardConfig, GenericTableConfig} from "@shared/model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {GradeService} from "@grade/service/grade.service";
import {GenericTableHelper} from "@shared/helper";
import {Grade} from "@grade/model";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {CardHelper} from "@shared/helper/card.helper";

@Component({
  selector: 'app-grade-detail',
  templateUrl: './grade-detail.component.html',
  styleUrls: ['./grade-detail.component.scss']
})

export class GradeDetailComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.gradeConfig('page.grade.detail.title');
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});
  id: string = '';

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public gradeService: GradeService) { }

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(
        tap((params: Params) => {
          if (!isNil(params['id'])) {
            this.id = params['id'];
            this.gradeService.detail(this.id);
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

  private setConfig(list: Grade[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genGradeFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
