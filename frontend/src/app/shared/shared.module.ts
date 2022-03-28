import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorLandingPageComponent } from './component/error-landing-page/error-landing-page.component';
import { GenericDataTableComponent } from './component/generic-data-table/generic-data-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { TabComponent } from './component/tab/tab.component';
import { DestroyBaseComponent } from './component/destroy-base/destroy-base.component';



@NgModule({
    declarations: [ErrorLandingPageComponent, GenericDataTableComponent, TabComponent, DestroyBaseComponent],
    exports: [
        GenericDataTableComponent,
        TabComponent
    ],
  imports: [CommonModule, TranslateModule]
})
export class SharedModule { }
