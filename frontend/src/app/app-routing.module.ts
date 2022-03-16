import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorLandingPageComponent } from '@shared/component/error-landing-page/error-landing-page.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./module/guest/guest.module').then(m => m.GuestModule)},
  {
    path: 'dashboard',
    loadChildren: () => import('./module/authenticated/authenticated.module').then(m => m.AuthenticatedModule)
  },
  {path: '**', component: ErrorLandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
