import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AppRoute, GenericTableConfig, MenuItem, MenuItemType} from '@shared/model';
import {GenericTableHelper} from '@shared/helper';
import {Numberplate} from "@numberplate/model";
import {NumberplateService} from "@numberplate/service/numberplate.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-numberplate-list',
  templateUrl: './numberplate-list.component.html',
  styleUrls: ['./numberplate-list.component.scss']
})
export class NumberplateListComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});

  constructor(public numberplateService: NumberplateService, public router: Router) { }

  ngOnInit(): void {
    this.numberplateService.list().pipe(
      tap((list: Numberplate[]) => this.setConfig(list)))
      .subscribe();
  }

  handleClick(menuItem: MenuItem): void {
    switch (menuItem.type) {
      case MenuItemType.NUMBERPLATE_DETAIL:
        this.router.navigate([`${menuItem.link}${menuItem.data.numberplate_id}`]).then();
        break;
    }
  }

  private setConfig(list: Numberplate[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genNumberplateFieldDefinitions();
    config.data = list;
    config.actions = [{
      icon: 'fa-eye',
      label: '',
      link: AppRoute.NUMBERPLATE_DETAIL,
      active: false,
      type: MenuItemType.NUMBERPLATE_DETAIL
    }]
    this.config$.next(config);
  }
}
