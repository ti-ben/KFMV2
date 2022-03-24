import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AppRoute, GenericTableConfig, MenuItem, MenuItemType} from '@shared/model';
import {GenericTableHelper} from '@shared/helper';
import {SiteService} from "@site/service/site.service";
import {Site} from "@site/model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});

  constructor(public siteService: SiteService, public router: Router) {
  }

  ngOnInit(): void {
    this.siteService.list().pipe(
      tap((list: Site[]) => this.setConfig(list)))
      .subscribe();
  }

  handleClick(menuItem: MenuItem): void {
    switch (menuItem.type) {
      case MenuItemType.SITE_DETAIL:
        this.router.navigate([`${menuItem.link}${menuItem.data.site_id}`]).then();
        break;
    }
  }

  private setConfig(list: Site[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genSiteFieldDefinitions();
    config.data = list;
    config.actions = [{
      icon: 'fa-eye',
      label: '',
      link: AppRoute.SITE_DETAIL,
      active: false,
      type: MenuItemType.SITE_DETAIL
    }]
    this.config$.next(config);
  }
}
