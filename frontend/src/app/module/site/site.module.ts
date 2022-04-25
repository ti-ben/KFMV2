import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SiteRoutingModule} from '@site/site-routing.module';
import {SiteDetailComponent, SiteFormComponent, SiteListComponent} from '@site/component';
import {SharedModule} from "@shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {SiteHomeComponent} from './component/site-home/site-home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SiteListComponent,
    SiteDetailComponent,
    SiteFormComponent,
    SiteHomeComponent
  ],
    imports: [
        CommonModule,
        SiteRoutingModule,
        SharedModule,
        TranslateModule,
        ReactiveFormsModule,
        FormsModule
    ]
})

export class SiteModule { }
