import { DtoInterface } from '@shared/model';

export interface UserDto extends DtoInterface{
  user_id: string,
  firstname: string,
  lastname: string,
  gender: string,
  avatar: string,
  dob: Date,
  email: string,
  password: string,
  telpro: string,
  telperso: string,
  nationality: string,
  numirn: string,
  driver_license: string,
  created_on: Date,
  pob: string,
  active: string
}
