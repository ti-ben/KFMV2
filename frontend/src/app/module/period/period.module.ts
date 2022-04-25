import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PeriodRoutingModule} from '@period/period-routing.module';
import {PeriodDetailComponent, PeriodFormComponent, PeriodListComponent} from '@period/component';
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "@shared/shared.module";

@NgModule({
  declarations: [
    PeriodListComponent,
    PeriodDetailComponent,
    PeriodFormComponent
  ],
  imports: [
    CommonModule,
    PeriodRoutingModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class PeriodModule { }
