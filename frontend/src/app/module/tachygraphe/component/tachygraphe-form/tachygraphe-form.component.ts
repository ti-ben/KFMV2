import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Tachygraphe, TachygrapheCreatePayload} from "@tachygraphe/model";
import {TachygrapheHelper} from "@tachygraphe/helper";
import {TachygrapheService} from "@tachygraphe/service/tachygraphe.service";
import {UserService} from "@user/service/user.service";
import {ApiResponse} from "@shared/model";
import {keys} from "lodash";

@Component({
  selector: 'app-tachygraphe-form',
  templateUrl: './tachygraphe-form.component.html',
  styleUrls: ['./tachygraphe-form.component.scss']
})
export class TachygrapheFormComponent implements OnInit {
  @Input() detail: Tachygraphe = TachygrapheHelper.getEmpty();
  tachoFormGroup!: FormGroup;

  user_id = this.userService.currentDetail$.value.user_id;

  constructor(public tachographService: TachygrapheService, public userService: UserService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  addTachograph() {
    if(this.tachoFormGroup.valid){
      const payload: TachygrapheCreatePayload = this.tachoFormGroup.value;
      payload.user.user_id = this.user_id;
      console.log('payload', payload);
      this.tachographService.create(payload).subscribe((response: ApiResponse) => {
        if(response.result) {
          this.tachoFormGroup.reset();
        }
      })
    }
  }

  private initForm(): void {
    this.tachoFormGroup = TachygrapheHelper.toFormGroup();
  }

  public getControl(name: string): FormControl {
    return this.tachoFormGroup.get(name) as FormControl;
  }
}
