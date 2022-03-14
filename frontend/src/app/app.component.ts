import { Component } from '@angular/core';
import { AddressDto } from '@address/model';
import { AppointmentDto } from '@appointment/model';
import { GradeDto } from '@grade/model';
import { NumberplateDto } from '@numberplate/model';
import { PeriodDto } from '@period/model';
import { PrestataireDto } from '@prestataire/model';
import { SiteDto } from '@site/model';
import { StatusDto } from '@status/model';
import { TachygrapheDto } from '@tachygraphe/model';
import { UserDto } from '@user/model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KfmFramework';
  address?: AddressDto;
  appointment?: AppointmentDto;
  grade?: GradeDto;
  numberplate?: NumberplateDto;
  period?: PeriodDto;
  prestataire?: PrestataireDto;
  site?: SiteDto;
  status?: StatusDto;
  tachygraphe?: TachygrapheDto;
  user?: UserDto;

}
