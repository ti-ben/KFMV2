import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorLandingPageComponent} from "./shared/component/error-landing-page/error-landing-page.component";

const routes: Routes = [
  {path: '**', component:ErrorLandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
