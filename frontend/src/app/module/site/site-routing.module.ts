import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SiteListComponent , SiteFormComponent, SiteDetailComponent } from '@site/component';

const routes: Routes = [
  {path: '', component: SiteListComponent},
  {path: '', component: SiteFormComponent},
  {path: '', component: SiteDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule {
}
