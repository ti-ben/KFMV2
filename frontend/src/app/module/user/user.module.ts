import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import {UserRoutingModule} from '@user/user-routing.module';
import {UserDetailComponent, UserFormComponent, UserListComponent} from '@user/component';
import {SharedModule} from '@shared/shared.module';
import { UserDetailIdentityComponent } from './component/user-detail-identity/user-detail-identity.component';
import { UserDetailMedicalSelectionComponent } from './component/user-detail-medical-selection/user-detail-medical-selection.component';
import { UserDetailMedicalCapComponent } from './component/user-detail-medical-cap/user-detail-medical-cap.component';
import { UserDetailMedicalAdrComponent } from './component/user-detail-medical-adr/user-detail-medical-adr.component';
import { UserDetailMedicalTachographComponent } from './component/user-detail-medical-tachograph/user-detail-medical-tachograph.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    UserDetailComponent,
    UserDetailIdentityComponent,
    UserDetailMedicalSelectionComponent,
    UserDetailMedicalCapComponent,
    UserDetailMedicalAdrComponent,
    UserDetailMedicalTachographComponent
  ],
    imports: [
        CommonModule,
        // Don't forget to add/import the {entity}RoutingModule & SharedModule
        UserRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class UserModule {
}
