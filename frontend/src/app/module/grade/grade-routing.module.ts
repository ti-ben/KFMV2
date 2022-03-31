import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {GradeDetailComponent, GradeHomeComponent, GradeFormComponent, GradeListComponent} from '@grade/component';

const routes: Routes = [
  {
    path: '', component: GradeListComponent,
    children: [
      {path: '', component: GradeHomeComponent},
      {path: 'create', component: GradeFormComponent},
      {path: 'detail/:id', component: GradeDetailComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GradeRoutingModule {
}
