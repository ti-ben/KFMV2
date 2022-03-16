import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GradeListComponent , GradeFormComponent, GradeDetailComponent } from '@grade/component';

const routes: Routes = [
  {path: '', component: GradeListComponent},
  {path: '', component: GradeFormComponent},
  {path: '', component: GradeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradeRoutingModule {
}
