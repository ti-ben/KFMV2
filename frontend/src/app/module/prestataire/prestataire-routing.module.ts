import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PrestataireDetailComponent, PrestataireHomeComponent, PrestataireFormComponent, PrestataireListComponent} from '@prestataire/component';

const routes: Routes = [
  {
    path: '', component: PrestataireListComponent,
    children: [
      {path: '', component: PrestataireHomeComponent},
      {path: 'create', component: PrestataireFormComponent},
      {path: 'detail/:id', component: PrestataireDetailComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestataireRoutingModule {
}
