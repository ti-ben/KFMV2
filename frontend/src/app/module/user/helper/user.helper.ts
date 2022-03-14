import { User } from '@user/model/business';
import { UserDto } from '@user/model';

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
      active: dto.active
    }
  }
  public toDto(user: User): UserDto {
    return {
      user_id: '',
      firstname: '',
      lastname: '',
      gender: '',
      avatar: '',
      dob: '',
      email: '',
      password: '',
      telpro: '',
      telperso: '',
      nationality: '',
      numirn: '',
      driver_license: '',
      created_on: '',
      pob: '',
      active: ''
    };
  }
}
