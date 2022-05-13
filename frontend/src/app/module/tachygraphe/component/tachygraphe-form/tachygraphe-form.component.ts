import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Tachygraphe} from "@tachygraphe/model";
import {TachygrapheHelper} from "@tachygraphe/helper";

@Component({
  selector: 'app-tachygraphe-form',
  templateUrl: './tachygraphe-form.component.html',
  styleUrls: ['./tachygraphe-form.component.scss']
})
export class TachygrapheFormComponent implements OnInit {
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
