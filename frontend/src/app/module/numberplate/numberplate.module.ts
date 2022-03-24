import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberplateRoutingModule } from '@numberplate/numberplate-routing.module';
import { NumberplateListComponent, NumberplateFormComponent, NumberplateDetailComponent } from '@numberplate/component';
import {SharedModule} from "@shared/shared.module";



@NgModule({
  declarations: [
    NumberplateListComponent,
    NumberplateFormComponent,
    NumberplateDetailComponent
  ],
  imports: [
    CommonModule,
    // Don't forget to add/import the {entity}RoutingModule & SharedModule
    NumberplateRoutingModule,
    SharedModule
  ]
})
export class NumberplateModule { }
