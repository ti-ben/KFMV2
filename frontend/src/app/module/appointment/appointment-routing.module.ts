import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppointmentListComponent , AppointmentFormComponent, AppointmentDetailComponent } from '@appointment/component';

const routes: Routes = [
  {path: '', component: AppointmentListComponent},
  {path: '', component: AppointmentFormComponent},
  {path: '', component: AppointmentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule {
}
