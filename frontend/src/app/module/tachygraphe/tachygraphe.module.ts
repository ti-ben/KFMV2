import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import { TachygrapheRoutingModule } from '@tachygraphe/tachygraphe-routing.module';
import { TachygrapheListComponent, TachygrapheDetailComponent, TachygrapheFormComponent } from '@tachygraphe/component';
import {SharedModule} from "@shared/shared.module";

@NgModule({
    declarations: [
        TachygrapheListComponent,
        TachygrapheDetailComponent,
        TachygrapheFormComponent
    ],
  exports: [
    TachygrapheFormComponent,
    TachygrapheListComponent
  ],
  imports: [
    CommonModule,
    // Don't forget to add/import the {entity}RoutingModule
    TachygrapheRoutingModule,
    SharedModule
  ]
})
export class TachygrapheModule { }
