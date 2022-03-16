import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import { GradeRoutingModule } from '@grade/grade-routing.module';
import { GradeListComponent , GradeFormComponent, GradeDetailComponent } from '@grade/component';

@NgModule({
  declarations: [
    GradeListComponent,
    GradeFormComponent,
    GradeDetailComponent
  ],
  imports: [
    CommonModule,
    // Don't forget to add/import the {entity}RoutingModule
    GradeRoutingModule
  ]
})
export class GradeModule {
}
