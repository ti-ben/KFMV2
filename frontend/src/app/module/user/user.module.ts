import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import { UserRoutingModule } from '@user/user-routing.module';
import { UserListComponent , UserFormComponent, UserDetailComponent } from '@user/component';

@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    // Don't forget to add/import the {entity}RoutingModule
    UserRoutingModule
  ]
})
export class UserModule {
}
