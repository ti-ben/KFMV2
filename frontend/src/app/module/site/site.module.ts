import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import { SiteRoutingModule } from '@site/site-routing.module';
import { SiteListComponent, SiteDetailComponent, SiteFormComponent } from '@site/component';



@NgModule({
  declarations: [

    SiteListComponent,
    SiteDetailComponent,
    SiteFormComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
