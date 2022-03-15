import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorLandingPageComponent} from "./shared/component/error-landing-page/error-landing-page.component";

const routes: Routes = [
  //{path: '', loadChildren: ()=> import('./module/public/public.module').then((m)=>m.PublicModule)},
  {path: 'home', loadChildren: ()=> import('./module/site/site.module').then((m)=>m.SiteModule)},
  {path: '**', component:ErrorLandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
