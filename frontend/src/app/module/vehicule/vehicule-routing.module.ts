import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { VehiculeListComponent , VehiculeFormComponent, VehiculeDetailComponent } from '@vehicule/component';

const routes: Routes = [
  {
    path: 'list',
    component: VehiculeListComponent
  },
  {
    path: 'form',
    component: VehiculeFormComponent
  },
  {
    path: 'detail/:id',
    component: VehiculeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculeRoutingModule {
}
