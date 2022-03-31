import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import {StatusRoutingModule} from '@status/status-routing.module';
import {StatusDetailComponent, StatusFormComponent, StatusListComponent} from '@status/component';
import {SharedModule} from "@shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import { StatusHomeComponent } from './component/status-home/status-home.component';

@NgModule({
  declarations: [
    StatusListComponent,
    StatusFormComponent,
    StatusDetailComponent,
    StatusHomeComponent
  ],
    imports: [
        CommonModule,
        // Don't forget to add/import the {entity}RoutingModule & SharedModule
        StatusRoutingModule,
        SharedModule,
        TranslateModule
    ]
})
export class StatusModule {
}
