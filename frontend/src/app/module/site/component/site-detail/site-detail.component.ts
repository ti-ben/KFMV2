import {Component, Input, OnInit, Output} from '@angular/core';
import {CardConfig, SelectConfig} from "@shared/model";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {SiteService} from "@site/service/site.service";
import {Site, SiteUpdatePayload} from "@site/model";
import {CardHelper} from "@shared/helper/card.helper";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {SiteHelper} from "@site/helper";
import {ActifHelper, DriverHelper, GenderHelper} from "@shared/helper";
import {Status} from "@status/model";
import {StatusHelper} from "@status/helper";
import {Grade} from "@grade/model";
import {GradeHelper} from "@grade/helper";

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.scss']
})

export class SiteDetailComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.gradeConfig('page.site.detail.title');
  @Input() detail: Site = SiteHelper.getEmpty();
  id: string = '';
  actifSelectConfig!: SelectConfig;
  formGroup!: FormGroup;

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public siteService: SiteService) {
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  private initForm(): void {
    this.formGroup = SiteHelper.toFormGroup(); //A faire
  }

  ngOnInit(): void {
    this.initForm();
    this.setSelectConfig();
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

  ngOnChanges(): void {
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
      console.log('payload', payload);
      this.siteService.update(payload).subscribe();
    }
  }

  archive(): void {
    alert('Archivage du site');
  }

  private setSelectConfig(): void {
    this.actifSelectConfig = {
      label: {label: 'form.site.label.active'},
      placeholder: 'form.site.placeholder.active',
      ctrl: this.getControl('active'),
      values: ActifHelper.toSelectOption()
    };
  }
}
