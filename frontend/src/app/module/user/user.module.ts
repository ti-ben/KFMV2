import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from '@user/user-routing.module';
import {UserDetailComponent, UserFormComponent, UserListComponent} from '@user/component';
import {SharedModule} from '@shared/shared.module';
import {UserDetailIdentityComponent} from './component/user-detail-identity/user-detail-identity.component';
import {
  UserDetailMedicalSelectionComponent
} from './component/user-detail-medical-selection/user-detail-medical-selection.component';
import {UserDetailCapComponent} from './component/user-detail-cap/user-detail-cap.component';
import {UserDetailAdrComponent} from './component/user-detail-adr/user-detail-adr.component';
import {UserDetailTachographComponent} from './component/user-detail-tachograph/user-detail-tachograph.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserDetailSummaryComponent} from './component/user-detail-summary/user-detail-summary.component';
import {TranslateModule} from '@ngx-translate/core';
import {UserHomeComponent} from './component/user-home/user-home.component';
import {UserDetailCredentialComponent} from './component/user-detail-credential/user-detail-credential.component';
import {GradeModule} from "@grade/grade.module";
import { UserDetailAddressComponent } from './component/user-detail-address/user-detail-address.component';
import {AppointmentModule} from "@appointment/appointment.module";

@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    UserDetailComponent,
    UserDetailIdentityComponent,
    UserDetailMedicalSelectionComponent,
    UserDetailCapComponent,
    UserDetailAdrComponent,
    UserDetailTachographComponent,
    UserDetailSummaryComponent,
    UserHomeComponent,
    UserDetailCredentialComponent,
    UserDetailAddressComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        TranslateModule,
        GradeModule,
        AppointmentModule,
        FormsModule
    ]

})
export class UserModule {
}
