import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CardConfig, GenericTableConfig} from "@shared/model";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {SiteService} from "@site/service/site.service";
import {Site} from "@site/model";
import {CardHelper} from "@shared/helper/card.helper";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {GenericTableHelper} from "@shared/helper";

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.scss']
})

export class SiteDetailComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.gradeConfig('page.site.detail.title');
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});
  id: string = '';
  formGroup!: FormGroup;

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public siteService: SiteService) {
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(
        tap((params: Params) => {
          if (!isNil(params['id'])) {
            this.id = params['id'];
            this.siteService.detail(this.id);
          }
        })
      ).subscribe();
  }

  update(): void{
    alert('Mise à jour du site');
  }

  archive(): void{
    alert('Archivage du site');
  }

  private setConfig(list: Site[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genSiteFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }

}
