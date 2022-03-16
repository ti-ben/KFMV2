import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserListComponent , UserFormComponent, UserDetailComponent } from '@user/component';

const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: '', component: UserFormComponent},
  {path: '', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
