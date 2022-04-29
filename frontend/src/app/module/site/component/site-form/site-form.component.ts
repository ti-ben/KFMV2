import {Component, OnInit} from '@angular/core';
import {ApiResponse, CardConfig, SelectConfig} from '@shared/model';
import {CardHelper} from '@shared/helper/card.helper';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SiteCreatePayload} from '@site/model';
import {SiteService} from '@site/service/site.service';
import {ActifHelper} from "@shared/helper";

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.scss']
})
export class SiteFormComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.siteConfig('page.site.create.title');
  actifSelectConfig!: SelectConfig;
  formGroup!: FormGroup;

  constructor(public siteService: SiteService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  create(): void {
    if (this.formGroup.valid) {
      const payload: SiteCreatePayload = this.formGroup.value;
      this.siteService.create(payload).subscribe((response: ApiResponse) => {
        if (response.result) {
          this.formGroup.reset();
        }
      })
    }
  }

  private initForm(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      created_on: new FormControl(new Date()),
      active: new FormControl('')
    });
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }
}
