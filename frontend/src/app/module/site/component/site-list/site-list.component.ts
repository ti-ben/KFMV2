import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {GenericTableConfig} from '@shared/model';
import {GenericTableHelper} from '@shared/helper';
import {SiteService} from "@site/service/site.service";
import {Site} from "@site/model";

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});

  constructor(public siteService: SiteService) {
  }

  ngOnInit(): void {
    this.siteService.list().pipe(
      tap((list: Site[]) => this.setConfig(list)))
      .subscribe();
  }

  private setConfig(list: Site[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genSiteFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }

}
