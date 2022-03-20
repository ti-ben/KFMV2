import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import { SiteRoutingModule } from '@site/site-routing.module';
import { SiteListComponent, SiteDetailComponent, SiteFormComponent } from '@site/component';
import {SharedModule} from "@shared/shared.module";

@NgModule({
  declarations: [
    SiteListComponent,
    SiteDetailComponent,
    SiteFormComponent
  ],
  imports: [
    CommonModule,
    // Don't forget to add/import the {entity}RoutingModule
    SiteRoutingModule,
    SharedModule
  ]
})
export class SiteModule { }
