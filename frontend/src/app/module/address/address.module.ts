import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressRoutingModule } from "@address/address-routing.module";
import { AddressListComponent, AddressDetailComponent, AddressFormComponent } from '@address/component';

@NgModule({
  declarations: [
    AddressListComponent,
    AddressDetailComponent,
    AddressFormComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule
  ]
})
export class AddressModule {
}
