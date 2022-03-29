import { User } from '@user/model/business';
import { UserDto } from '@user/model';
import { SiteHelper } from '@site/helper';
import {GradeHelper} from "@grade/helper";
import {StatusHelper} from "@status/helper";
import {AddressHelper} from "@address/helper";

export class UserHelper {
  public static fromDto(dto: UserDto): User {
    return {
      user_id: dto.user_id,
      firstname: dto.firstname,
      lastname: dto.lastname,
      gender: dto.gender,
      avatar: dto.avatar,
      dob: dto.dob,
      email: dto.email,
      password: dto.password,
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
      addresslist: AddressHelper.fromDto(dto.addresslist)
    }
  }

  public toDto(user: User): UserDto {
    return {
      user_id: user.user_id,
      firstname: user.firstname,
      lastname: user.lastname,
      gender: user.gender,
      avatar: user.avatar,
      dob: new Date(),
      email: user.email,
      password: user.password,
      telpro: user.telpro,
      telperso: user.telperso,
      nationality: user.nationality,
      numirn: user.numirn,
      driver_license: user.driver_license,
      created_on: new Date(),
      pob: user.pob,
      active: user.active,
      site: SiteHelper.toDto(user.site),
      grade: GradeHelper.toDto(user.grade),
      status: StatusHelper.toDto(user.status),
      addresslist: AddressHelper.toDto(user.addresslist)
    };
  }

  static getEmpty(): User {
    return {
      active: '',
      avatar: '',
      created_on: new Date(),
      dob: new Date(),
      driver_license: '',
      email: '',
      firstname: '',
      gender: '',
      lastname: '',
      nationality: '',
      numirn: '',
      password: '',
      pob: '',
      telperso: '',
      telpro: '',
      user_id: '',
      site: SiteHelper.getEmpty(),
      grade: GradeHelper.getEmpty(),
      status: StatusHelper.getEmpty(),
      addresslist: AddressHelper.getEmpty()
    };
  }

  static fromDtoArray(data: UserDto[]): User[] {
    return data.map((dto: UserDto) => UserHelper.fromDto(dto));
  }
}
