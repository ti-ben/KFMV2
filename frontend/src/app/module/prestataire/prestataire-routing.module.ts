import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrestataireListComponent , PrestataireFormComponent, PrestataireDetailComponent } from '@prestataire/component';

const routes: Routes = [
  {path: '', component: PrestataireListComponent},
  {path: '', component: PrestataireFormComponent},
  {path: '', component: PrestataireDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestataireRoutingModule {
}
