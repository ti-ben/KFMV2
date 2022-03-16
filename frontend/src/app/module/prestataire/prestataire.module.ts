import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import { PrestataireRoutingModule } from '@prestataire/prestataire-routing.module';
import { PrestataireListComponent, PrestataireFormComponent, PrestataireDetailComponent } from '@prestataire/component';



@NgModule({
  declarations: [
    PrestataireListComponent,
    PrestataireFormComponent,
    PrestataireDetailComponent
  ],
  imports: [
    CommonModule,
    // Don't forget to add/import the {entity}RoutingModule
    PrestataireRoutingModule
  ]
})
export class PrestataireModule { }
