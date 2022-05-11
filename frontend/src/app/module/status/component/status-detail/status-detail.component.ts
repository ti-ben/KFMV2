import {Component, Input, OnInit} from '@angular/core';
import {CardConfig, SelectConfig} from "@shared/model";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {StatusService} from "@status/service/status.service";
import {CardHelper} from "@shared/helper/card.helper";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Status, StatusUpdatePayload} from "@status/model";
import {StatusHelper} from "@status/helper";
import {ActifHelper} from "@shared/helper";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.scss']
})

export class StatusDetailComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.gradeConfig('page.status.detail.title');
  @Input() detail: Status = StatusHelper.getEmpty();
  id: string = '';
  actifSelectConfig$: BehaviorSubject<SelectConfig | null> = new BehaviorSubject<SelectConfig | null>(null);
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
      this.setSelectConfig();
    })
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
    if (this.formGroup.valid) {
      const payload: StatusUpdatePayload = this.formGroup.value;
      payload.status_id = this.detail.status_id;
      this.statusService.update(payload).subscribe();
    }
  }

  private setSelectConfig(): void {
    this.actifSelectConfig$.next({
      label: {label: 'form.status.label.active'},
      placeholder: 'form.status.placeholder.active',
      ctrl: this.getControl('active'),
      values: ActifHelper.toSelectOption()
    });
  }

}
