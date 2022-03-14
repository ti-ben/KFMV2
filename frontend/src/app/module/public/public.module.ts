import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHomeComponent } from "./component/public-home/public-home.component";
import {PublicRoutingModule} from "./public-routing.module";



@NgModule({
  declarations: [
    PublicHomeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
