import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './component';

const routes: Routes = [
  {
    // Add all entity.module path
    path: '', component: DashboardComponent, children: [
      {path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule)},
      {path: 'address', loadChildren: () => import('../address/address.module').then(m => m.AddressModule)},
      {path: 'appointment', loadChildren: () => import('../appointment/appointment.module').then(m => m.AppointmentModule)},
      {path: 'numberplate', loadChildren: () => import('../numberplate/numberplate.module').then(m => m.NumberplateModule)},
      {path: 'grade', loadChildren: () => import('../grade/grade.module').then(m => m.GradeModule)},
      {path: 'period', loadChildren: () => import('../period/period.module').then(m => m.PeriodModule)},
      {path: 'prestataire', loadChildren: () => import('../prestataire/prestataire.module').then(m => m.PrestataireModule)},
      {path: 'site', loadChildren: () => import('../site/site.module').then(m => m.SiteModule)},
      {path: 'status', loadChildren: () => import('../status/status.module').then(m => m.StatusModule)},
      {path: 'tachygraphe', loadChildren: () => import('../tachygraphe/tachygraphe.module').then(m => m.TachygrapheModule)},
      {path: 'vehicule', loadChildren: () => import('../vehicule/vehicule.module').then(m => m.VehiculeModule)},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule {
}
