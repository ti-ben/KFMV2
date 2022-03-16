import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule)},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule {
}
