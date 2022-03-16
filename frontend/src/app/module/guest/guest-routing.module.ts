import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SigninComponent } from './component';

const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'signup', component: SigninComponent},
  {path: 'contact', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule {
}
