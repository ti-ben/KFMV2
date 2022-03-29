import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {AppRoute, CardConfig, GenericTableConfig, MenuItem, MenuItemType} from "@shared/model";
import {tap} from "rxjs/operators";
import {Prestataire} from "@prestataire/model";
import {PrestataireService} from "@prestataire/service/prestataire.service";
import {User} from "@user/model";
import {NavigationService} from "@shared/service/navigation.service";
import {cloneDeep} from "lodash";
import {MenuHelper} from "@shared/helper/menu.helper";

@Component({
  selector: 'app-prestataire-list',
  templateUrl: './prestataire-list.component.html',
  styleUrls: ['./prestataire-list.component.scss']
})
export class PrestataireListComponent implements OnInit {
  list$ = new BehaviorSubject<Prestataire[]>([]);
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  prestataire$ = new BehaviorSubject<Prestataire | undefined>(undefined);
  cardConfig!: CardConfig;

  constructor(public prestataireService: PrestataireService, public navigation: NavigationService) {
  }

  ngOnInit(): void {
    this.cardConfig = {
      css: 'max-width-1024 p-large margin-auto margin-large'
    };
    this.prestataireService.list().pipe(
      tap((list: Prestataire[]) => this.list$.next(list)))
      .subscribe();
  }

  handleClick(menuItem: MenuItem): void {
    switch (menuItem.type) {
      case MenuItemType.PRESTATAIRE_DETAIL:
        const item = cloneDeep(MenuHelper.providerDetailMenuItem());
        item.link += menuItem.data.prestataire_id;
        this.navigation.navigate(item);
        break;
    }
  }
}

