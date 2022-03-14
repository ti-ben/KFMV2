import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PublicHomeComponent} from "./component/public-home/public-home.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: PublicHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {

}
