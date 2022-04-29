import {Component, Input, OnInit} from '@angular/core';
import {CardConfig, SelectConfig} from "@shared/model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PrestataireService} from "@prestataire/service/prestataire.service";
import {tap} from "rxjs/operators";
import {Prestataire, PrestataireUpdatePayload} from "@prestataire/model";
import {isNil} from "lodash";
import {FormControl, FormGroup} from "@angular/forms";
import {CardHelper} from "@shared/helper/card.helper";
import {PrestataireHelper} from "@prestataire/helper";
import {ActifHelper} from "@shared/helper";

@Component({
  selector: 'app-prestataire-detail',
  templateUrl: './prestataire-detail.component.html',
  styleUrls: ['./prestataire-detail.component.scss']
})

export class PrestataireDetailComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.gradeConfig('page.prestataire.detail.title');
  @Input() detail: Prestataire = PrestataireHelper.getEmpty();
  id: string = '';
  actifSelectConfig!: SelectConfig;
  formGroup!: FormGroup;

  constructor(public router: Router, public activatedRouter: ActivatedRoute, public prestataireService: PrestataireService) {
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  private initForm(prestataire: Prestataire): void {
    this.formGroup = PrestataireHelper.toFormGroup(prestataire);
  }

  ngOnInit(): void {
    this.prestataireService.currentDetail$.subscribe((prestataire: Prestataire) => {
      this.detail = prestataire;
      this.initForm(prestataire);
    })
    this.setSelectConfig();
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

  update(): void {
    console.log('mes valeurs', this.formGroup.value); // A retirer (debug)
    if (this.formGroup.valid) {
      const payload: PrestataireUpdatePayload = this.formGroup.value;
      payload.prestataire_id = this.detail.prestataire_id;
      console.log('payload', payload); // A retirer (debug)
      this.prestataireService.update(payload).subscribe();
    }
  }

  /*
    archive(): void {
      alert('Archivage du site');
    }
  */

  private setSelectConfig(): void {
    this.actifSelectConfig = {
      label: {label: 'form.prestataire.label.active'},
      placeholder: 'form.prestataire.placeholder.active',
      ctrl: this.getControl('active'),
      values: ActifHelper.toSelectOption()
    };
  }

}
