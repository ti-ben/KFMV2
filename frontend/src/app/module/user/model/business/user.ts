import {Site} from '@site/model';
import {Grade} from "@grade/model";
import {Status} from "@status/model";
import {Address} from "@address/model";

export interface User {
  user_id: string,
  firstname: string,
  lastname: string,
  gender: string,
  avatar: string,
  dob: Date,
  email: string,
  telpro: string,
  telperso: string,
  nationality: string,
  numirn: string,
  driver_license: string,
  created_on: Date,
  pob: string,
  active: string,
  site: Site,
  //grade: Grade,
  status: Status,
  //address: Address
}
