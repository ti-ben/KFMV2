import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TachygrapheListComponent , TachygrapheFormComponent, TachygrapheDetailComponent } from '@tachygraphe/component';

const routes: Routes = [
  {path: 'list', component: TachygrapheListComponent},
  {path: 'form', component: TachygrapheFormComponent},
  {path: 'detail/:id', component: TachygrapheDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TachygrapheRoutingModule {
}
