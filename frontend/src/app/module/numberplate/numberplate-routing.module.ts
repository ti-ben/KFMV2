import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NumberplateListComponent , NumberplateFormComponent, NumberplateDetailComponent } from '@numberplate/component';

const routes: Routes = [
  {path: 'list', component: NumberplateListComponent},
  {path: 'form', component: NumberplateFormComponent},
  {path: 'detail', component: NumberplateDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumberplateRoutingModule {
}
