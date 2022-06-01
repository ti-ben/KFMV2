import {Component, Input, OnInit} from '@angular/core';
import {CardConfig, SelectConfig} from "@shared/model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {ActifHelper} from "@shared/helper";
import {NumberplateService} from "@numberplate/service/numberplate.service";
import {Numberplate, NumberplateUpdatePayload} from "@numberplate/model";
import {CardHelper} from "@shared/helper/card.helper";
import {FormControl, FormGroup} from "@angular/forms";
import {NumberplateHelper} from "@numberplate/helper";
import {BehaviorSubject} from "rxjs";
import {Site} from "@site/model";
import {SiteHelper} from "@site/helper";
import {SiteService} from "@site/service/site.service";

@Component({
  selector: 'app-numberplate-detail',
  templateUrl: './numberplate-detail.component.html',
  styleUrls: ['./numberplate-detail.component.scss']
})

export class NumberplateDetailComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.numberplateConfig('page.numberplate.detail.title');
  siteSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  actifSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  @Input() nDetail: Numberplate = NumberplateHelper.getEmpty();
  id: string = '';
  siteList: Site[] = [];
  formGroup!: FormGroup;
  numberplate!: Numberplate;
  selectedItem: any;

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public numberplateService: NumberplateService, public siteService: SiteService) {
  }

  ngOnInit(): void {
    this.numberplateService.currentDetail$.subscribe((numberplate: Numberplate) => {
      this.nDetail = numberplate;
      this.initForm(numberplate);
      this.setSelectConfig();
    })

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

  update(): void {
    if (this.formGroup.valid) {
      const payload: NumberplateUpdatePayload = this.formGroup.value;
      console.log('payload', payload);
      payload.numberplate_id = this.nDetail.numberplate_id;
      payload.site = {site_id: payload.site};
      this.numberplateService.update(payload).subscribe();
      this.refreshDetails();
    }
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  private initForm(numberplate: Numberplate): void {
    this.formGroup = NumberplateHelper.toFormGroup(numberplate);
  }

  refreshDetails(): void {
    //alert('refresh');
    //location.reload();
  }

  private setSelectConfig(): void {

    this.siteService.list().subscribe((list: Site[]) => {
      this.siteList = list;
      this.siteSelectConfig$.next({
        label: {label: 'form.site.label.site_name'},
        placeholder: 'form.site.placeholder.site_name',
        ctrl: this.getControl('site'),
        selected: this.nDetail.site.name,
        values: SiteHelper.toSiteOptionArray(list)
      });
    })

    this.actifSelectConfig$.next({
      label: {label: 'form.numberplate.label.active'},
      placeholder: 'form.numberplate.placeholder.active',
      ctrl: this.getControl('active'),
      selected: this.nDetail.active,
      values: ActifHelper.toSelectOption()
    });
  }
}
