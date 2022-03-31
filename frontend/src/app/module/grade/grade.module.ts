import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import {GradeRoutingModule} from '@grade/grade-routing.module';
import {GradeDetailComponent, GradeFormComponent, GradeListComponent} from '@grade/component';
import {SharedModule} from "@shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import { GradeHomeComponent } from './component/grade-home/grade-home.component';

@NgModule({
  declarations: [
    GradeListComponent,
    GradeFormComponent,
    GradeDetailComponent,
    GradeHomeComponent
  ],
    imports: [
        CommonModule,
        // Don't forget to add/import the {entity}RoutingModule & SharedModule
        GradeRoutingModule,
        SharedModule,
        TranslateModule
    ]
})
export class GradeModule {
}
