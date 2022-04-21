import {PayloadInterface} from '@shared/model';

export interface UserUpdatePayload extends PayloadInterface {
  firstname: string;
  lastname: string;
  gender: string;
  avatar: string;
  dob: Date;
  email: string;
  password: string;
  telpro: string;
  telperso: string;
  nationality: string;
  numirn: string;
  driver_license: string;
  created_on: Date;
  pob: string;
  active: string;
  site: any;
  address: any;
  grade: any;
  status: any;
  user_id: string;
}
