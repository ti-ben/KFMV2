import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { LabelWithParam } from '@shared/model';
import { SiteService } from "@site/service/site.service";
import { Site } from "@site/model";
import { NavigationService } from "@shared/service/navigation.service";
import { cloneDeep } from "lodash";
import { MenuHelper } from "@shared/helper/menu.helper";
import { WithMenuAndDestroyableBaseComponent } from "@shared/component/with-menu-and-destroyable/with-menu-and-destroyable.component";

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})

export class SiteListComponent extends WithMenuAndDestroyableBaseComponent implements OnInit {
  list$ = new BehaviorSubject<Site[]>([]);
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  labelWithParam: LabelWithParam = {label: 'button.site-add'};

  constructor(public siteService: SiteService, public navigation: NavigationService) {
    super(navigation);
  }

  ngOnInit(): void {
    this.siteService.refresh$.pipe(
      takeUntil(this.destroyers$),
      switchMap((search: string) => this.siteService.list()),
      tap((list: Site[]) => {
        console.log('ma liste', list);
        this.list$.next(list);
      }))
      .subscribe();

    this.search$.pipe(
      takeUntil(this.destroyers$),
      switchMap((search: string) => this.siteService.search({search: search})),
      tap((list: Site[]) => this.list$.next(list)))
      .subscribe();
  }

  create(): void {
    const item = cloneDeep(MenuHelper.siteCreateMenuItem());
    this.navigation.navigate(item);
  }

  detail(site: Site): void {
    const item = cloneDeep(MenuHelper.siteDetailMenuItem());
    item.link += site.site_id;
    this.navigation.navigate(item);
  }
}
