import {User} from '@user/model/business';
import {UserDto} from '@user/model';
import {SiteHelper} from '@site/helper';
import {GradeHelper} from "@grade/helper";
import {StatusHelper} from "@status/helper";
import {AddressHelper} from "@address/helper";
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
      address: AddressHelper.fromDto(dto.address)
    }
  }

  public static toFormGroup(user: User = UserHelper.getEmpty()): FormGroup {
    return new FormGroup({
      firstname: new FormControl(user.firstname, [Validators.required]),
      lastname: new FormControl(user.lastname, [Validators.required]),
      gender: new FormControl(user.gender, [Validators.required]),
      avatar: new FormControl(''),
      dob: new FormControl(user.dob, [Validators.required]),
      email: new FormControl(user.email, [Validators.required]),
      telpro: new FormControl(user.telpro, [Validators.required]),
      telperso: new FormControl(user.telperso, [Validators.required]),
      nationality: new FormControl(user.nationality, [Validators.required]),
      numirn: new FormControl(user.numirn, [Validators.required]),
      driver_license: new FormControl(user.driver_license, [Validators.required]),
      created_on: new FormControl(new Date()),
      pob: new FormControl(user.pob, [Validators.required]),
      active: new FormControl(user.active, [Validators.required]),
      site_name: new FormControl(user.site.name, [Validators.required]),
      grade_name: new FormControl(user.grade.name, [Validators.required]),
      status_name: new FormControl(user.status.name, [Validators.required]),
    });
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
      address: AddressHelper.toDto(user.address)
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
      pob: '',
      telperso: '',
      telpro: '',
      user_id: '',
      site: SiteHelper.getEmpty(),
      grade: GradeHelper.getEmpty(),
      status: StatusHelper.getEmpty(),
      address: AddressHelper.getEmpty()
    };
  }

  static fromDtoArray(data: UserDto[]): User[] {
    return data.map((dto: UserDto) => UserHelper.fromDto(dto));
  }
}
