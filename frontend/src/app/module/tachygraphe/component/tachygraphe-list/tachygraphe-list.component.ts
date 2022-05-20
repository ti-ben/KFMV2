import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TachygrapheHelper} from "@tachygraphe/helper";
import {Tachygraphe} from "@tachygraphe/model";

@Component({
  selector: 'app-tachygraphe-list',
  templateUrl: './tachygraphe-list.component.html',
  styleUrls: ['./tachygraphe-list.component.scss']
})
export class TachygrapheListComponent implements OnInit {
  @Input() detail: Tachygraphe = TachygrapheHelper.getEmpty();
  formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formGroup = TachygrapheHelper.toFormGroup();
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }
}
