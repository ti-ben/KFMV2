import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import { TachygrapheRoutingModule } from '@tachygraphe/tachygraphe-routing.module';
import { TachygrapheListComponent, TachygrapheDetailComponent, TachygrapheFormComponent } from '@tachygraphe/component';

@NgModule({
  declarations: [
    TachygrapheListComponent,
    TachygrapheDetailComponent,
    TachygrapheFormComponent
  ],
  imports: [
    CommonModule,
    // Don't forget to add/import the {entity}RoutingModule
    TachygrapheRoutingModule
  ]
})
export class TachygrapheModule { }
