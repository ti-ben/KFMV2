import {Component, OnInit} from '@angular/core';
import {GradeService} from '@grade/service/grade.service';
import {BehaviorSubject} from 'rxjs';
import {Grade} from '@grade/model';
import {tap} from 'rxjs/operators';
import { AppRoute, GenericTableConfig, MenuItem, MenuItemType } from '@shared/model';
import {GenericTableHelper} from '@shared/helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.scss']
})
export class GradeListComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});
  constructor(public gradeService: GradeService, public router: Router) { }

  ngOnInit(): void {
    this.gradeService.list().pipe(
      tap((list: Grade[]) => this.setConfig(list)))
      .subscribe();
  }

  handleClick(menuItem: MenuItem): void {
    switch (menuItem.type) {
      case MenuItemType.GRADE_DETAIL:
        this.router.navigate([`${menuItem.link}${menuItem.data.grade_id}`]).then();
        break;

    }
  }

  private setConfig(list: Grade[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genGradeFieldDefinitions();
    config.data = list;
    config.actions = [{
      icon: 'fa-eye',
      label: '',
      link: AppRoute.GRADE_DETAIL,
      active: false,
      type: MenuItemType.GRADE_DETAIL
    }]
    this.config$.next(config);
  }
}
