import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {GradeDetailComponent, GradeFormComponent, GradeListComponent} from '@grade/component';

const routes: Routes = [
  {path: 'list', component: GradeListComponent},
  {path: 'form', component: GradeFormComponent},
  {path: 'detail/:id', component: GradeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradeRoutingModule {
}
