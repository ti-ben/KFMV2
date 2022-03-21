import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrestataireListComponent , PrestataireFormComponent, PrestataireDetailComponent } from '@prestataire/component';

const routes: Routes = [
  {path: 'list', component: PrestataireListComponent},
  {path: 'form', component: PrestataireFormComponent},
  {path: 'detail', component: PrestataireDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestataireRoutingModule {
}
