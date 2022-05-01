import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Tachygraphe} from "@tachygraphe/model";
import {TachygrapheHelper} from "@tachygraphe/helper";

@Component({
  selector: 'app-user-detail-tachograph',
  templateUrl: './user-detail-tachograph.component.html',
  styleUrls: ['./user-detail-tachograph.component.scss']
})
export class UserDetailTachographComponent implements OnInit {
  @Input() detail: Tachygraphe = TachygrapheHelper.getEmpty();
  formGroup!: FormGroup;

  constructor() {
  }

  private initForm(): void {
    this.formGroup = TachygrapheHelper.toFormGroup();
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  ngOnInit(): void {
    this.initForm();
  }

  onClick() {
    alert('envoi du form');
  }
}
