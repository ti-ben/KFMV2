import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { DashboardComponent } from './component';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardLeftNavComponent } from './component/dashboard-left-nav/dashboard-left-nav.component';
import { DashboardTopNavComponent } from './component/dashboard-top-nav/dashboard-top-nav.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardLeftNavComponent,
    DashboardTopNavComponent
  ],
    imports: [
        CommonModule,
        AuthenticatedRoutingModule,
        TranslateModule
    ]
})
export class AuthenticatedModule {
}
