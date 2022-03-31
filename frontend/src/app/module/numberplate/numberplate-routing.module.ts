import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NumberplateListComponent, NumberplateHomeComponent, NumberplateFormComponent, NumberplateDetailComponent } from '@numberplate/component';

const routes: Routes = [
  {
    path: '', component: NumberplateListComponent,
    children: [
      {path: '', component: NumberplateHomeComponent},
      {path: 'create', component: NumberplateFormComponent},
      {path: 'detail/:id', component: NumberplateDetailComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumberplateRoutingModule {
}
