import {Component, OnInit} from '@angular/core';
import {GradeService} from '@grade/service/grade.service';
import {BehaviorSubject} from 'rxjs';
import {Grade} from '@grade/model';
import {tap} from 'rxjs/operators';
import {GenericTableConfig} from '@shared/model';
import {GenericTableHelper} from '@shared/helper';
import {User} from "@user/model";

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.scss']
})
export class GradeListComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});
  constructor(public gradeService: GradeService) { }

  ngOnInit(): void {
    this.gradeService.list().pipe(
      tap((list: Grade[]) => this.setConfig(list)))
      .subscribe();
  }

  private setConfig(list: Grade[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genGradeFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
