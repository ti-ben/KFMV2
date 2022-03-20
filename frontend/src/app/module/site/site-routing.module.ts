import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SiteListComponent , SiteFormComponent, SiteDetailComponent } from '@site/component';

const routes: Routes = [
  {path: 'list', component: SiteListComponent},
  {path: 'form', component: SiteFormComponent},
  {path: 'detail/:id', component: SiteDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule {
}
