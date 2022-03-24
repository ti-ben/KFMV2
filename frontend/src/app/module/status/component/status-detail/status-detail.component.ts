import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {GenericTableConfig} from "@shared/model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {isNil} from "lodash";
import {GenericTableHelper} from "@shared/helper";
import {StatusService} from "@status/service/status.service";
import {Status} from "@status/model";

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.scss']
})

export class StatusDetailComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});
  id: string = '';

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public statusService: StatusService) {
  }

  ngOnInit(): void {
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

  private setConfig(list: Status[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genStatusFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
