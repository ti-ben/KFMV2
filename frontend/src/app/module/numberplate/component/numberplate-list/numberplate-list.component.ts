import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CardConfig, MenuItem, MenuItemType} from '@shared/model';
import {Numberplate} from "@numberplate/model";
import {NumberplateService} from "@numberplate/service/numberplate.service";
import {User} from "@user/model";
import {NavigationService} from "@shared/service/navigation.service";
import {cloneDeep} from "lodash";
import {MenuHelper} from "@shared/helper/menu.helper";

@Component({
  selector: 'app-numberplate-list',
  templateUrl: './numberplate-list.component.html',
  styleUrls: ['./numberplate-list.component.scss']
})
export class NumberplateListComponent implements OnInit {
  list$ = new BehaviorSubject<Numberplate[]>([]);
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  numberplate$ = new BehaviorSubject<Numberplate | undefined>(undefined);
  cardConfig!: CardConfig;

  constructor(public numberplateService: NumberplateService, public navigation: NavigationService) {
  }

  ngOnInit(): void {
    this.cardConfig = {
      css: 'max-width-1024 p-large margin-auto margin-large'
    };
    this.numberplateService.list().pipe(
      tap((list: Numberplate[]) => this.list$.next(list)))
      .subscribe();
  }

  handleClick(menuItem: MenuItem): void {
    switch (menuItem.type) {
      case MenuItemType.NUMBERPLATE_DETAIL:
        const item = cloneDeep(MenuHelper.numberplateDetailMenuItem());
        item.link += menuItem.data.numberplate_id;
        this.navigation.navigate(item);
        break;
    }
  }
}

