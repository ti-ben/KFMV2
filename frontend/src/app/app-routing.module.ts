import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorLandingPageComponent} from '@shared/component/error-landing-page/error-landing-page.component';
import {PrivateGuardService, PublicGuardService} from './security';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'guest',
    pathMatch: 'full'
  },
  {
    path: 'guest',
    canActivate: [PublicGuardService],
    loadChildren: () => import('./module/guest/guest.module').then(m => m.GuestModule)
  },
  {
    path: 'dashboard',
    canActivate: [PrivateGuardService],
    loadChildren: () => import('./module/authenticated/authenticated.module').then(m => m.AuthenticatedModule)
  },
  {
    path: '**',
    component: ErrorLandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
