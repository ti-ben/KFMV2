import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import { AppointmentRoutingModule } from '@appointment/appointment-routing.module';
import { AppointmentListComponent, AppointmentFormComponent, AppointmentDetailComponent } from '@appointment/component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "@shared/shared.module";

@NgModule({
    declarations: [
        AppointmentListComponent,
        AppointmentFormComponent,
        AppointmentDetailComponent
    ],
    exports: [
        AppointmentFormComponent,
        AppointmentListComponent
    ],
  imports: [
    CommonModule,
    // Don't forget to add/import the {entity}RoutingModule
    AppointmentRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AppointmentModule { }
