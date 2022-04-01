import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {switchMap, takeUntil, tap} from "rxjs/operators";
import {Prestataire} from "@prestataire/model";
import {PrestataireService} from "@prestataire/service/prestataire.service";
import {NavigationService} from "@shared/service/navigation.service";
import {cloneDeep} from "lodash";
import {MenuHelper} from "@shared/helper/menu.helper";
import { WithMenuAndDestroyableBaseComponent } from '@shared/component/with-menu-and-destroyable/with-menu-and-destroyable.component';
import {LabelWithParam} from "@shared/model";

@Component({
  selector: 'app-prestataire-list',
  templateUrl: './prestataire-list.component.html',
  styleUrls: ['./prestataire-list.component.scss']
})

export class PrestataireListComponent extends WithMenuAndDestroyableBaseComponent implements OnInit {
  list$ = new BehaviorSubject<Prestataire[]>([]);
  search$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  labelWithParam: LabelWithParam = {label: 'button.provider-add'};

  constructor(public prestataireService: PrestataireService, public navigation: NavigationService) {
    super(navigation);
  }

  ngOnInit(): void {
    this.prestataireService.refresh$.pipe(
      takeUntil(this.destroyers$),
      switchMap((search: string) => this.prestataireService.list()),
      tap((list: Prestataire[]) => {this.list$.next(list)}))
      .subscribe();

    this.search$.pipe(
      takeUntil(this.destroyers$),
      switchMap((search: string) => this.prestataireService.search({search: search})),
      tap((list: Prestataire[]) => this.list$.next(list)))
      .subscribe();
  }

  create(): void {
    const item = cloneDeep(MenuHelper.providerCreateMenuItem());
    this.navigation.navigate(item);
  }

  detail(prestataire: Prestataire): void {
    const item = cloneDeep(MenuHelper.providerDetailMenuItem());
    item.link += prestataire.prestataire_id;
    this.navigation.navigate(item);
  }
}
