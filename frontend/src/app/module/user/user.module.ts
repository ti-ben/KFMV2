import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// Don't forget to import the {entity path} to routing module!
import {UserRoutingModule} from '@user/user-routing.module';
import {UserDetailComponent, UserFormComponent, UserListComponent} from '@user/component';
import {SharedModule} from '@shared/shared.module';
import {UserDetailIdentityComponent} from './component/user-detail-identity/user-detail-identity.component';
import {UserDetailMedicalSelectionComponent} from './component/user-detail-medical-selection/user-detail-medical-selection.component';
import {UserDetailCapComponent} from './component/user-detail-cap/user-detail-cap.component';
import {UserDetailAdrComponent} from './component/user-detail-adr/user-detail-adr.component';
import {UserDetailTachographComponent} from './component/user-detail-tachograph/user-detail-tachograph.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserDetailSummaryComponent} from './component/user-detail-summary/user-detail-summary.component';
import {TranslateModule} from '@ngx-translate/core';
import {UserHomeComponent} from './component/user-home/user-home.component';
import { UserDetailCredentialComponent } from './component/user-detail-credential/user-detail-credential.component';

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
    UserDetailCredentialComponent
  ],
    imports: [
      CommonModule,
      // Don't forget to add/import the {entity}RoutingModule & SharedModule
      UserRoutingModule,
      SharedModule,
      ReactiveFormsModule,
      TranslateModule
    ]

})
export class UserModule {
}
