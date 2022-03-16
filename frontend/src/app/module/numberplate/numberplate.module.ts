import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberplateRoutingModule } from '@numberplate/numberplate-routing.module';
import { NumberplateListComponent, NumberplateFormComponent, NumberplateDetailComponent } from '@numberplate/component';



@NgModule({
  declarations: [
    NumberplateListComponent,
    NumberplateFormComponent,
    NumberplateDetailComponent
  ],
  imports: [
    CommonModule,
    NumberplateRoutingModule
  ]
})
export class NumberplateModule { }
