import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {AppRoute, GenericTableConfig, MenuItem, MenuItemType} from "@shared/model";
import {tap} from "rxjs/operators";
import {GenericTableHelper} from "@shared/helper";
import {Prestataire} from "@prestataire/model";
import {PrestataireService} from "@prestataire/service/prestataire.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-prestataire-list',
  templateUrl: './prestataire-list.component.html',
  styleUrls: ['./prestataire-list.component.scss']
})
export class PrestataireListComponent implements OnInit {
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});

  constructor(public prestataireService: PrestataireService, public router: Router) { }

  ngOnInit(): void {
    this.prestataireService.list().pipe(
      tap((list: Prestataire[]) => this.setConfig(list)))
      .subscribe();
  }

  handleClick(menuItem: MenuItem): void {
    switch (menuItem.type) {
      case MenuItemType.PRESTATAIRE_DETAIL:
        this.router.navigate([`${menuItem.link}${menuItem.data.prestataire_id}`]).then();
        break;
    }
  }

  private setConfig(list: Prestataire[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genPrestataireFieldDefinitions();
    config.data = list;
    config.actions = [{
      icon: 'fa-eye',
      label: '',
      link: AppRoute.PRESTATAIRE_DETAIL,
      active: false,
      type: MenuItemType.PRESTATAIRE_DETAIL
    }]
    this.config$.next(config);
  }
}
