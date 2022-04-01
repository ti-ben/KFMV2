import { Component, OnInit } from '@angular/core';
import { ApiResponse, CardConfig } from '@shared/model';
import { CardHelper } from '@shared/helper/card.helper';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SiteCreatePayload } from '@site/model';
import { SiteService } from '@site/service/site.service';

@Component({
  selector: 'app-site-form',
  templateUrl: './site-form.component.html',
  styleUrls: ['./site-form.component.scss']
})
export class SiteFormComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.siteConfig('page.site.create.title');
  formGroup!: FormGroup;

  constructor(public siteService: SiteService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  save(): void {
    if (this.formGroup.valid) {
      const payload: SiteCreatePayload = this.formGroup.value;
      payload.created_on = new Date(payload.created_on);
      this.siteService.create(payload).subscribe((response: ApiResponse) => {
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
      description: new FormControl(''),
      created_on: new FormControl(new Date())
    });
  }

}
