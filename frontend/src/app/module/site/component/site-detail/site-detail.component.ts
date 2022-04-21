import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CardConfig, GenericTableConfig} from "@shared/model";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {SiteService} from "@site/service/site.service";
import {Site, SiteUpdatePayload} from "@site/model";
import {CardHelper} from "@shared/helper/card.helper";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {SiteHelper} from "@site/helper";
import {GenericTableHelper} from "@shared/helper";

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.scss']
})

export class SiteDetailComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.gradeConfig('page.site.detail.title');
  @Input() detail: Site = SiteHelper.getEmpty();
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

  ngOnChanges(): void{
    this.formGroup = new FormGroup({
      site_id: new FormControl(this.detail.site_id),
      name: new FormControl(this.detail.name),
      description: new FormControl(this.detail.description),
      created_on: new FormControl(this.detail.created_on),
    });
  }

  //todo update site information to db
  update(): void {
    if (this.formGroup.valid) {
      const payload: SiteUpdatePayload = this.formGroup.value;
      payload.site_id = this.detail.site_id;
      //console.log('payload', payload);
      this.siteService.update(payload).subscribe();
    }
  }

  archive(): void {
    alert('Archivage du site');
  }

  private setConfig(list: Site[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genSiteFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }

}
