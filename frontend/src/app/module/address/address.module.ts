import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressRoutingModule } from "@address/address-routing.module";
import { AddressListComponent, AddressDetailComponent, AddressFormComponent } from '@address/component';
import {SharedModule} from "@shared/shared.module";

@NgModule({
    declarations: [
        AddressListComponent,
        AddressDetailComponent,
        AddressFormComponent
    ],
    exports: [
        AddressFormComponent
    ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    SharedModule
  ]
})
export class AddressModule {
}
