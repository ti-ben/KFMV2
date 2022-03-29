import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CardConfig, MenuItem, MenuItemType} from '@shared/model';
import {SiteService} from "@site/service/site.service";
import {Site} from "@site/model";
import {NavigationService} from "@shared/service/navigation.service";
import {cloneDeep} from "lodash";
import {MenuHelper} from "@shared/helper/menu.helper";

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})

export class SiteListComponent implements OnInit {
  list$ = new BehaviorSubject<Site[]>([]);
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  site$ = new BehaviorSubject<Site | undefined>(undefined);
  cardConfig!: CardConfig;

  constructor(public siteService: SiteService, public navigation: NavigationService) {
  }

  ngOnInit(): void {
    this.cardConfig = {
      css: 'max-width-1024 p-large margin-auto margin-large'
    };
    this.siteService.list().pipe(
      tap((list: Site[]) => this.list$.next(list)))
      .subscribe();
  }

  handleClick(menuItem: MenuItem): void {
    switch (menuItem.type) {
      case MenuItemType.SITE_DETAIL:
        const item = cloneDeep(MenuHelper.siteDetailMenuItem());
        item.link += menuItem.data.site_id;
        this.navigation.navigate(item);
        break;
    }
  }
}
