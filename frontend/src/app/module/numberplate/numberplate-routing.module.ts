import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NumberplateListComponent , NumberplateFormComponent, NumberplateDetailComponent } from '@numberplate/component';

const routes: Routes = [
  {path: '', component: NumberplateListComponent},
  {path: '', component: NumberplateFormComponent},
  {path: '', component: NumberplateDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumberplateRoutingModule {
}
