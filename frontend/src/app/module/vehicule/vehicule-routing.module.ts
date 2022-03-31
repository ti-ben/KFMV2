import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {
  VehiculeDetailComponent,
  VehiculeFormComponent,
  VehiculeHomeComponent,
  VehiculeListComponent
} from '@vehicule/component';

const routes: Routes = [
  {
    path: '', component: VehiculeListComponent,
    children: [
      {path: '', component: VehiculeHomeComponent},
      {path: 'create', component: VehiculeFormComponent},
      {path: 'detail/:id', component: VehiculeDetailComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculeRoutingModule {
}
