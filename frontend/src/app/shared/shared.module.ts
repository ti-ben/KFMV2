import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorLandingPageComponent} from './component/error-landing-page/error-landing-page.component';
import {GenericDataTableComponent} from './component/generic-data-table/generic-data-table.component';
import {TranslateModule} from '@ngx-translate/core';
import {TabComponent} from './component/tab/tab.component';
import {DestroyBaseComponent} from './component/destroy-base/destroy-base.component';
import {SearchInputComponent} from './component/search-input/search-input.component';
import {FormsModule} from '@angular/forms';
import {CardComponent} from './component/card/card.component';
import {CardHeaderComponent} from './component/card-header/card-header.component';


@NgModule({
  declarations: [
    ErrorLandingPageComponent,
    GenericDataTableComponent,
    TabComponent,
    DestroyBaseComponent,
    SearchInputComponent,
    CardComponent,
    CardHeaderComponent],
  exports: [
    ErrorLandingPageComponent,
    GenericDataTableComponent,
    TabComponent,
    DestroyBaseComponent,
    SearchInputComponent,
    CardComponent,
    CardHeaderComponent
  ],
  imports: [CommonModule, TranslateModule, FormsModule]
})
export class SharedModule {
}
