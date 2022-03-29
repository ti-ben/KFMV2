import {Component, OnInit} from '@angular/core';
import {GradeService} from '@grade/service/grade.service';
import {BehaviorSubject} from 'rxjs';
import {Grade} from '@grade/model';
import {tap} from 'rxjs/operators';
import {CardConfig, MenuItem, MenuItemType} from '@shared/model';
import {User} from "@user/model";
import {UserService} from "@user/service/user.service";
import {NavigationService} from "@shared/service/navigation.service";
import {cloneDeep} from "lodash";
import {MenuHelper} from "@shared/helper/menu.helper";

@Component({
  selector: 'app-grade-list',
  templateUrl: './grade-list.component.html',
  styleUrls: ['./grade-list.component.scss']
})
export class GradeListComponent implements OnInit {
  list$ = new BehaviorSubject<Grade[]>([]);
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  grade$ = new BehaviorSubject<Grade | undefined>(undefined);
  cardConfig!: CardConfig;

  constructor(public gradeService: GradeService, public navigation: NavigationService) {
  }

  ngOnInit(): void {
    this.cardConfig = {
      css: 'max-width-1024 p-large margin-auto margin-large'
    };
    this.gradeService.list().pipe(
      tap((list: Grade[]) => this.list$.next(list)))
      .subscribe();
  }

  handleClick(menuItem: MenuItem): void {
    switch (menuItem.type) {
      case MenuItemType.GRADE_DETAIL:
        const item = cloneDeep(MenuHelper.gradeDetailMenuItem());
        item.link += menuItem.data.grade_id;
        this.navigation.navigate(item);
        break;
    }
  }
}
