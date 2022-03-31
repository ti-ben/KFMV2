import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StatusListComponent, StatusHomeComponent, StatusFormComponent, StatusDetailComponent } from '@status/component';

const routes: Routes = [
  {
    path: '', component: StatusListComponent,
    children: [
      {path: '', component: StatusHomeComponent},
      {path: 'create', component: StatusFormComponent},
      {path: 'detail/:id', component: StatusDetailComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule {
}
