import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TachygrapheListComponent , TachygrapheFormComponent, TachygrapheDetailComponent } from '@tachygraphe/component';

const routes: Routes = [
  {path: '', component: TachygrapheListComponent},
  {path: '', component: TachygrapheFormComponent},
  {path: '', component: TachygrapheDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TachygrapheRoutingModule {
}
