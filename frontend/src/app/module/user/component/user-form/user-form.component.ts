import {Component, Input, OnInit} from '@angular/core';
import { UserHelper } from '@user/helper';
import { User } from '@user/model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() form: User = UserHelper.getEmpty();

  constructor() { }

  ngOnInit(): void {
  }

}
