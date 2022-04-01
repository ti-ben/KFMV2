import { Component, OnInit } from '@angular/core';
import {ApiResponse, CardConfig} from "@shared/model";
import {CardHelper} from "@shared/helper/card.helper";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PrestataireService} from "@prestataire/service/prestataire.service";
import {PrestataireCreatePayload} from "@prestataire/model";

@Component({
  selector: 'app-prestataire-form',
  templateUrl: './prestataire-form.component.html',
  styleUrls: ['./prestataire-form.component.scss']
})
export class PrestataireFormComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.prestataireConfig('page.prestataire.create.title');
  formGroup!: FormGroup;

  constructor(public prestataireService: PrestataireService) { }

  ngOnInit(): void {
    this.initForm();
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  save(): void {
    if (this.formGroup.valid) {
      const payload: PrestataireCreatePayload = this.formGroup.value;
      this.prestataireService.create(payload).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.formGroup.reset();
        }
      })
    }
  }

  private initForm(): void {
    // Object SiteCreatePayload
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      service: new FormControl('', [Validators.required])
    });
  }

}
