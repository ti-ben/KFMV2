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
  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      start_date: new FormControl(this.detail.start_date),
      end_date: new FormControl(this.detail.end_date),
      num_carte: new FormControl(this.detail.num_carte),
      comment: new FormControl(this.detail.comment)
    })
  }

  public getControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  onClick() {
    alert('envoi du form');
  }
}
