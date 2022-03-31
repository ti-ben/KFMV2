import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import {PrestataireRoutingModule} from '@prestataire/prestataire-routing.module';
import {PrestataireDetailComponent, PrestataireFormComponent, PrestataireListComponent} from '@prestataire/component';
import {SharedModule} from "@shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import { PrestataireHomeComponent } from './component/prestataire-home/prestataire-home.component';


@NgModule({
  declarations: [
    PrestataireListComponent,
    PrestataireFormComponent,
    PrestataireDetailComponent,
    PrestataireHomeComponent
  ],
    imports: [
        CommonModule,
        // Don't forget to add/import the {entity}RoutingModule & SharedModule
        PrestataireRoutingModule,
        SharedModule,
        TranslateModule
    ]
})
export class PrestataireModule {
}
