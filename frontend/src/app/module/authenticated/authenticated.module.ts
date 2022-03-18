import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { DashboardComponent } from './component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    DashboardComponent
  ],
    imports: [
        CommonModule,
        AuthenticatedRoutingModule,
        TranslateModule
    ]
})
export class AuthenticatedModule {
}
