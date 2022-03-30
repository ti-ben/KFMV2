import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserDetailComponent, UserFormComponent, UserListComponent } from '@user/component';
import { UserHomeComponent } from '@user/component/user-home/user-home.component';

const routes: Routes = [
  {
    path: '', component: UserListComponent,
    children: [
      {path: '', component: UserHomeComponent},
      {path: 'detail/:id', component: UserDetailComponent},
      {path: 'create', component: UserFormComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
