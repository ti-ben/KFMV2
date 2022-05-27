import {User} from '@user/model/business';
import {UserDto} from '@user/model';
import {SiteHelper} from '@site/helper';
import {GradeHelper} from "@grade/helper";
import {StatusHelper} from "@status/helper";
import {AddressHelper} from "@address/helper";
import {FormControl, FormGroup} from '@angular/forms';
import {isNil} from "lodash";
import {Site} from "@site/model";
import {SelectOption} from "@shared/model";
import {getLocaleDateTimeFormat} from "@angular/common";

export class UserHelper {
  public static fromDto(dto: UserDto): User {
    if (isNil(dto)) {
      return UserHelper.getEmpty();
    }
    return {
      user_id: dto.user_id,
      firstname: dto.firstname,
      lastname: dto.lastname,
      gender: dto.gender,
      avatar: dto.avatar,
      dob: dto.dob,
      email: dto.email,
      telpro: dto.telpro,
      telperso: dto.telperso,
      nationality: dto.nationality,
      numirn: dto.numirn,
      driver_license: dto.driver_license,
      created_on: dto.created_on,
      pob: dto.pob,
      active: dto.active,
      site: SiteHelper.fromDto(dto.site),
      grade: GradeHelper.fromDto(dto.grade),
      status: StatusHelper.fromDto(dto.status),
      //address: AddressHelper.fromDto(dto.address)
    }
  }

  public static toFormGroup(user: User = UserHelper.getEmpty()): FormGroup {
    return new FormGroup({
      firstname: new FormControl(user.firstname),
      lastname: new FormControl(user.lastname),
      gender: new FormControl(user.gender),
      avatar: new FormControl(''),
      dob: new FormControl(user.dob.toString().slice(0,10)),
      email: new FormControl(user.email),
      telpro: new FormControl(user.telpro),
      telperso: new FormControl(user.telperso),
      nationality: new FormControl(user.nationality),
      numirn: new FormControl(user.numirn),
      driver_license: new FormControl(user.driver_license),
      created_on: new FormControl(user.created_on.toString().slice(0,10)),
      pob: new FormControl(user.pob),
      active: new FormControl(user.active),
      site: new FormControl(user.site),
      //grade: new FormControl(user.grade),
      status: new FormControl(user.status),
      //address: new FormControl(user.address)
    });
  }

  public static toDto(user: User): UserDto {
    return {
      user_id: user.user_id,
      firstname: user.firstname,
      lastname: user.lastname,
      gender: user.gender,
      avatar: user.avatar,
      dob: new Date("dd/MM/yyyy"),
      email: user.email,
      telpro: user.telpro,
      telperso: user.telperso,
      nationality: user.nationality,
      numirn: user.numirn,
      driver_license: user.driver_license,
      created_on: new Date("dd/MM/yyyy"),
      pob: user.pob,
      active: user.active,
      site: SiteHelper.toDto(user.site),
      grade: GradeHelper.toDto(user.grade),
      status: StatusHelper.toDto(user.status),
      //address: AddressHelper.toDto(user.address)
    };
  }

  static getEmpty(): User {
    return {
      active: '',
      avatar: '',
      created_on: new Date("dd/MM/yyyy"),
      dob: new Date("dd/MM/yyyy"),
      driver_license: '',
      email: '',
      firstname: '',
      gender: '',
      lastname: '',
      nationality: '',
      numirn: '',
      pob: '',
      telperso: '',
      telpro: '',
      user_id: '',
      site: SiteHelper.getEmpty(),
      grade: GradeHelper.getEmpty(),
      status: StatusHelper.getEmpty(),
      //address: AddressHelper.getEmpty()
    };
  }

  static fromDtoArray(data: UserDto[]): User[] {
    return data.map((dto: UserDto) => UserHelper.fromDto(dto));
  }

  static toSiteOptionArray(list: Site[]): SelectOption[] {
    return list.map((site: Site) => {
      return {value: site.site_id, label: site.name};
    })
  }
}
