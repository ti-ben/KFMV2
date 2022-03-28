import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { DashboardComponent } from './component';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardLeftNavComponent } from './component/dashboard-left-nav/dashboard-left-nav.component';
import { DashboardTopNavComponent } from './component/dashboard-top-nav/dashboard-top-nav.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { DashboardBreadCrumbComponent } from './component/dashboard-bread-crumb/dashboard-bread-crumb.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardLeftNavComponent,
    DashboardTopNavComponent,
    DashboardBreadCrumbComponent
  ],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule,
    TranslateModule,
    ClickOutsideModule
  ]
})
export class AuthenticatedModule {
}
