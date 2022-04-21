import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import {SiteRoutingModule} from '@site/site-routing.module';
import {SiteDetailComponent, SiteFormComponent, SiteListComponent} from '@site/component';
import {SharedModule} from "@shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {SiteHomeComponent} from './component/site-home/site-home.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SiteListComponent,
    SiteDetailComponent,
    SiteFormComponent,
    SiteHomeComponent
  ],
    imports: [
        CommonModule,
        // Don't forget to add/import the {entity}RoutingModule
        SiteRoutingModule,
        SharedModule,
        TranslateModule,
        ReactiveFormsModule
    ]
})
export class SiteModule {
}
