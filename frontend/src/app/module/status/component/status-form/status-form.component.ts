import { Component, OnInit } from '@angular/core';
import {ApiResponse, CardConfig} from "@shared/model";
import {CardHelper} from "@shared/helper/card.helper";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StatusCreatePayload} from "@status/model";
import {StatusService} from "@status/service/status.service";

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.scss']
})
export class StatusFormComponent implements OnInit {
  cardConfig: CardConfig = CardHelper.statusConfig('page.status.create.title');
  formGroup!: FormGroup;

  constructor(public statusService: StatusService) { }

  ngOnInit(): void {
    this.initForm();
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  save(): void {
    if (this.formGroup.valid) {
      const payload: StatusCreatePayload = this.formGroup.value;
      this.statusService.create(payload).subscribe((response: ApiResponse) => {
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
    });
  }

}
