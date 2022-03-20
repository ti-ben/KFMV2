import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import { VehiculeRoutingModule } from '@vehicule/vehicule-routing.module';
import { VehiculeListComponent , VehiculeFormComponent, VehiculeDetailComponent } from '@vehicule/component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    VehiculeListComponent,
    VehiculeFormComponent,
    VehiculeDetailComponent
  ],
  imports: [
    CommonModule,
    // Don't forget to add/import the {entity}RoutingModule
    VehiculeRoutingModule,
    SharedModule
  ]
})
export class VehiculeModule {
}
