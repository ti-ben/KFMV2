import {Component, OnInit} from '@angular/core';
import {GradeService} from '@grade/service/grade.service';
import {BehaviorSubject} from 'rxjs';
import {Grade} from '@grade/model';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {CardConfig, LabelWithParam, MenuItem, MenuItemType} from '@shared/model';
import {NavigationService} from "@shared/service/navigation.service";
import {cloneDeep} from "lodash";
import {MenuHelper} from "@shared/helper/menu.helper";
import {
  WithMenuAndDestroyableBaseComponent
} from "@shared/component/with-menu-and-destroyable/with-menu-and-destroyable.component";
import {Vehicule} from "@vehicule/model";

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.scss']
})
export class GradeListComponent extends WithMenuAndDestroyableBaseComponent implements OnInit {
  list$ = new BehaviorSubject<Grade[]>([]);
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  labelWithParam: LabelWithParam = {label: 'button.grade-add'};

  constructor(public gradeService: GradeService, public navigation: NavigationService) {
    super(navigation);
  }

  ngOnInit(): void {
    this.search$.pipe(
      takeUntil(this.destroyers$),
      switchMap((search: string) => this.gradeService.search({search: search})),
      tap((list: Grade[]) => this.list$.next(list)))
      .subscribe();
  }

  create(): void {
    const item = cloneDeep(MenuHelper.gradeCreateMenuItem());
    this.navigation.navigate(item);
  }

  detail(grade: Grade): void {
    const item = cloneDeep(MenuHelper.gradeDetailMenuItem());
    item.link += grade.grade_id;
    this.navigation.navigate(item);
  }
}
