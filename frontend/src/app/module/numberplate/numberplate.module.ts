import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberplateRoutingModule } from '@numberplate/numberplate-routing.module';
import { NumberplateListComponent, NumberplateFormComponent, NumberplateDetailComponent } from '@numberplate/component';
import {SharedModule} from "@shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import { NumberplateHomeComponent } from './component/numberplate-home/numberplate-home.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    NumberplateListComponent,
    NumberplateFormComponent,
    NumberplateDetailComponent,
    NumberplateHomeComponent
  ],
    imports: [
        CommonModule,
        // Don't forget to add/import the {entity}RoutingModule & SharedModule
        NumberplateRoutingModule,
        SharedModule,
        TranslateModule,
        ReactiveFormsModule
    ]
})
export class NumberplateModule { }
