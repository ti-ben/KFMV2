import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './component';
import { GuestRoutingModule } from './guest-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SigninComponent
  ],
    imports: [
        CommonModule,
        GuestRoutingModule,
        ReactiveFormsModule
    ]
})
export class GuestModule {
}
