import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserDetailComponent, UserFormComponent, UserListComponent } from '@user/component';

const routes: Routes = [
  {path: 'list', component: UserListComponent},
  {path: 'form', component: UserFormComponent},
  {path: 'detail/:id', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
