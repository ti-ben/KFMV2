import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PeriodListComponent , PeriodFormComponent, PeriodDetailComponent } from '@period/component';

const routes: Routes = [
  {path: '', component: PeriodListComponent},
  {path: '', component: PeriodFormComponent},
  {path: '', component: PeriodDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodRoutingModule {
}
