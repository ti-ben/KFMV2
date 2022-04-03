import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CardConfig, GenericTableConfig} from "@shared/model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PrestataireService} from "@prestataire/service/prestataire.service";
import {tap} from "rxjs/operators";
import {Prestataire} from "@prestataire/model";
import {GenericTableHelper} from "@shared/helper";
import {isNil} from "lodash";
import {FormControl, FormGroup} from "@angular/forms";
import {CardHelper} from "@shared/helper/card.helper";

@Component({
  selector: 'app-prestataire-detail',
  templateUrl: './prestataire-detail.component.html',
  styleUrls: ['./prestataire-detail.component.scss']
})

export class PrestataireDetailComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.gradeConfig('page.prestataire.detail.title');
  config$: BehaviorSubject<GenericTableConfig> = new BehaviorSubject<GenericTableConfig>({data: [], fields: []});
  id: string = '';
  formGroup!: FormGroup;

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public prestataireService: PrestataireService) {
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(
        tap((params: Params) => {
          if (!isNil(params['id'])) {
            this.id = params['id'];
            this.prestataireService.detail(this.id);
          }
        })
      ).subscribe();
  }

  update(): void{
    alert('Mise à jour du prestataire');
  }

  archive(): void{
    alert('Archivage du prestataire');
  }

  private setConfig(list: Prestataire[]): void {
    let config = this.config$.getValue();
    config.fields = GenericTableHelper.genPrestataireFieldDefinitions();
    config.data = list;
    this.config$.next(config);
  }
}
