import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserComponent } from './component/user/user.component';



@NgModule({
  declarations: [
    UserFormComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
