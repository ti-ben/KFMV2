import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import { VehiculeRoutingModule } from '@vehicule/vehicule-routing.module';
import { VehiculeListComponent , VehiculeFormComponent, VehiculeDetailComponent } from '@vehicule/component';
import { SharedModule } from '@shared/shared.module';
import { VehiculeDetailAdrComponent } from './component/vehicule-detail-adr/vehicule-detail-adr.component';
import { VehiculeDetailMetrologyComponent } from './component/vehicule-detail-metrology/vehicule-detail-metrology.component';
import { VehiculeDetailIdentityComponent } from './component/vehicule-detail-identity/vehicule-detail-identity.component';
import { VehiculeDetailSummaryComponent } from './component/vehicule-detail-summary/vehicule-detail-summary.component';
import { VehiculeDetailTechnicalInterventionComponent } from './component/vehicule-detail-technical-intervention/vehicule-detail-technical-intervention.component';
import { VehiculeDetailTechnicalControlComponent } from './component/vehicule-detail-technical-control/vehicule-detail-technical-control.component';

@NgModule({
  declarations: [
    VehiculeListComponent,
    VehiculeFormComponent,
    VehiculeDetailComponent,
    VehiculeDetailAdrComponent,
    VehiculeDetailMetrologyComponent,
    VehiculeDetailIdentityComponent,
    VehiculeDetailSummaryComponent,
    VehiculeDetailTechnicalInterventionComponent,
    VehiculeDetailTechnicalControlComponent
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
