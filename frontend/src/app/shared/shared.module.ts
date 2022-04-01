import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorLandingPageComponent } from './component/error-landing-page/error-landing-page.component';
import { GenericDataTableComponent } from './component/generic-data-table/generic-data-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { TabComponent } from './component/tab/tab.component';
import { DestroyBaseComponent } from './component/destroy-base/destroy-base.component';
import { SearchInputComponent } from './component/search-input/search-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './component/card/card.component';
import { CardHeaderComponent } from './component/card-header/card-header.component';
import { ButtonIconComponent } from './component/button-icon/button-icon.component';
import { WithMenuAndDestroyableBaseComponent } from './component/with-menu-and-destroyable/with-menu-and-destroyable.component';
import { InputTextComponent } from './component/form/input-text/input-text.component';
import { InputDateComponent } from './component/form/input-date/input-date.component';
import { TextareaComponent } from './component/form/textarea/textarea.component';


@NgModule({
  declarations: [
    ErrorLandingPageComponent,
    GenericDataTableComponent,
    TabComponent,
    DestroyBaseComponent,
    SearchInputComponent,
    CardComponent,
    CardHeaderComponent,
    ButtonIconComponent, WithMenuAndDestroyableBaseComponent, InputTextComponent, InputDateComponent, TextareaComponent
  ],
  exports: [
    ErrorLandingPageComponent,
    GenericDataTableComponent,
    TabComponent,
    DestroyBaseComponent,
    SearchInputComponent,
    CardComponent,
    CardHeaderComponent,
    ButtonIconComponent,
    InputTextComponent,
    TextareaComponent,
    InputDateComponent
  ],
  imports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule]
})

export class SharedModule {
}
