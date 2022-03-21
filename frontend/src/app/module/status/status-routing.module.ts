import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StatusListComponent , StatusFormComponent, StatusDetailComponent } from '@status/component';

const routes: Routes = [
  {path: 'list', component: StatusListComponent},
  {path: 'form', component: StatusFormComponent},
  {path: 'detail', component: StatusDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule {
}
