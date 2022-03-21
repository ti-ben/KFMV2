import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {GenericTableConfig} from '@shared/model';
import {GenericTableHelper} from '@shared/helper';
import {Numberplate} from "@numberplate/model";
import {NumberplateService} from "@numberplate/service/numberplate.service";

@Component({
  selector: 'app-numberplate-list',
  templateUrl: './numberplate-list.component.html',
  styleUrls: ['./numberplate-list.component.scss']
})
export class NumberplateListComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});

  constructor(public numberplateService: NumberplateService) {
  }

  ngOnInit(): void {
    this.numberplateService.list().pipe(
      tap((list: Numberplate[]) => this.setConfig(list)))
      .subscribe();
  }

  private setConfig(list: Numberplate[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genNumberplateFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
