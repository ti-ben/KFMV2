import {Component, Input, OnInit} from '@angular/core';
import {SelectConfig} from "@shared/model";
import {SiteService} from "@site/service/site.service";
import {Site} from "@site/model";
import {SiteHelper} from "@site/helper";
import {FormControl, FormGroup} from "@angular/forms";
import {NumberplateService} from "@numberplate/service/numberplate.service";
import {Numberplate} from "@numberplate/model";
import {NumberplateHelper} from "@numberplate/helper";
import {BehaviorSubject} from "rxjs";
import {User} from "@user/model";
import {UserHelper} from "@user/helper";
import {Vehicule} from "@vehicule/model";

@Component({
  selector: 'app-vehicule-detail-numberplate',
  templateUrl: './vehicule-detail-numberplate.component.html',
  styleUrls: ['./vehicule-detail-numberplate.component.scss']
})
export class VehiculeDetailNumberplateComponent implements OnInit {
  siteSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  siteList: Site[] = [];

  numberplateSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
  numberplateList: Numberplate[] = [];

  @Input() detail: Numberplate = NumberplateHelper.getEmpty();
  formGroup!: FormGroup;

  constructor(public siteService: SiteService, public numberplateService: NumberplateService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.setSelectConfig();
  }

  private initForm(): void {
    this.formGroup = NumberplateHelper.toFormGroup();
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  private setSelectConfig(): void {

    this.siteService.list().subscribe((list: Site[]) => {
      this.siteList = list;
      this.siteSelectConfig$.next({
        label: {label: 'form.vehicule.label.site_name'},
        placeholder: 'form.vehicule.placeholder.site_name',
        ctrl: this.getControl('site_name'),
        selected: this.detail.site.name,
        values: SiteHelper.toSiteOptionArray(list)
      });
    });

    this.numberplateService.list().subscribe((list: Numberplate[]) => {
      this.numberplateList = list;
      this.numberplateSelectConfig$.next( {
        label: {label: 'form.vehicule.label.num_plate'},
        placeholder: 'form.vehicule.placeholder.num_plate',
        ctrl: this.getControl('num_plate'),
        selected: this.detail.num_plate,
        values: NumberplateHelper.toNumberplateOptionArray(list)
      });
    });
  }

}
