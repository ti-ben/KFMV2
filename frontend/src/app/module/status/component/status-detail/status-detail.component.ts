import {Component, Input, OnInit} from '@angular/core';
import {CardConfig, SelectConfig} from "@shared/model";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {StatusService} from "@status/service/status.service";
import {CardHelper} from "@shared/helper/card.helper";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Site} from "@site/model";
import {SiteHelper} from "@site/helper";
import {Status} from "@status/model";
import {StatusHelper} from "@status/helper";
import {ActifHelper} from "@shared/helper";

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.scss']
})

export class StatusDetailComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.gradeConfig('page.status.detail.title');
  @Input() detail: Status = StatusHelper.getEmpty();
  id: string = '';
  actifSelectConfig!: SelectConfig;
  formGroup!: FormGroup;

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public statusService: StatusService) {
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  private initForm(status: Status): void {
    this.formGroup = StatusHelper.toFormGroup(status);
  }

  ngOnInit(): void {
    this.statusService.currentDetail$.subscribe((status: Status) => {
      this.detail = status;
      this.initForm(status);
    })
    this.setSelectConfig();
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

  update(): void {
    alert('Mise à jour du prestataire');
  }

  archive(): void {
    alert('Archivage du prestataire');
  }

  private setSelectConfig(): void {
    this.actifSelectConfig = {
      label: {label: 'form.status.label.active'},
      placeholder: 'form.status.placeholder.active',
      ctrl: this.getControl('active'),
      values: ActifHelper.toSelectOption()
    };
  }

}
