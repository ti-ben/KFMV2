import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {UserDetailComponent, UserFormComponent, UserHomeComponent, UserListComponent} from '@user/component';

const routes: Routes = [
  {
    path: '', component: UserListComponent,
    children: [
      {path: '', component: UserHomeComponent},
      {path: 'create', component: UserFormComponent},
      {path: 'detail/:id', component: UserDetailComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
