import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import { StatusRoutingModule } from '@status/status-routing.module';
import { StatusListComponent , StatusFormComponent, StatusDetailComponent } from '@status/component';

@NgModule({
  declarations: [
    StatusListComponent,
    StatusFormComponent,
    StatusDetailComponent
  ],
  imports: [
    CommonModule,
    // Don't forget to add/import the {entity}RoutingModule
    StatusRoutingModule
  ]
})
export class StatusModule {
}
