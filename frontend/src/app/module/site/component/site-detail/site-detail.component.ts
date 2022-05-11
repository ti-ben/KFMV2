import {Component, Input, OnInit} from '@angular/core';
import {CardConfig, SelectConfig} from "@shared/model";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {SiteService} from "@site/service/site.service";
import {Site, SiteUpdatePayload} from "@site/model";
import {CardHelper} from "@shared/helper/card.helper";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {SiteHelper} from "@site/helper";
import {ActifHelper} from "@shared/helper";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.scss']
})

export class SiteDetailComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.gradeConfig('page.site.detail.title');
  @Input() detail: Site = SiteHelper.getEmpty();
  id: string = '';
  actifSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  formGroup!: FormGroup;

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public siteService: SiteService) {
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  private initForm(site: Site): void {
    this.formGroup = SiteHelper.toFormGroup(site);
  }

  ngOnInit(): void {
    this.siteService.currentDetail$.subscribe((site: Site) => {
      this.detail = site;
      this.initForm(site);
      this.setSelectConfig();
    })
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

  //La date et le status actif ou inactif ne s'enregistre pas en db
  update(): void {
    //console.log('mes valeurs', this.formGroup.value); // A retirer (debug)
    if (this.formGroup.valid) {
      const payload: SiteUpdatePayload = this.formGroup.value;
      payload.site_id = this.detail.site_id;
      //console.log('payload', payload); // A retirer (debug)
      this.siteService.update(payload).subscribe();
    }
  }

  private setSelectConfig(): void {
    this.actifSelectConfig$.next({
      label: {label: 'form.site.label.active'},
      placeholder: 'form.site.placeholder.active',
      ctrl: this.getControl('active'),
      values: ActifHelper.toSelectOption()
    });
  }
}
