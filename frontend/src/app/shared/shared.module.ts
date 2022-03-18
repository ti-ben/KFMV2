import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorLandingPageComponent } from './component/error-landing-page/error-landing-page.component';
import { GenericDataTableComponent } from './component/generic-data-table/generic-data-table.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
    declarations: [ErrorLandingPageComponent, GenericDataTableComponent],
    exports: [
        GenericDataTableComponent
    ],
  imports: [CommonModule, TranslateModule]
})
export class SharedModule { }
