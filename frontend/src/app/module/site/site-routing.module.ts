import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {SiteListComponent, SiteFormComponent, SiteDetailComponent, SiteHomeComponent} from '@site/component';

const routes: Routes = [
  {
    path: '', component: SiteListComponent,
    children: [
      {path: '', component: SiteHomeComponent},
      {path: 'create', component: SiteFormComponent},
      {path: 'detail/:id', component: SiteDetailComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule {
}
