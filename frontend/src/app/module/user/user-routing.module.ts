import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserListComponent } from '@user/component';

const routes: Routes = [
  {path: '', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
