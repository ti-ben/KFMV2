import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodRoutingModule } from '@period/period-routing.module';
import { PeriodListComponent, PeriodDetailComponent, PeriodFormComponent } from '@period/component';



@NgModule({
  declarations: [
    PeriodListComponent,
    PeriodDetailComponent,
    PeriodFormComponent
  ],
  imports: [
    CommonModule,
    PeriodRoutingModule
  ]
})
export class PeriodModule { }
