import {DtoInterface} from "@shared/model";
import {UserDto} from "@user/model";

export interface AppointmentDto extends DtoInterface {
  appointment_id: string,
  start_date: Date,
  end_date: Date,
  price: string,
  theme: string,
  comment: string,
  type: string,
  category: string,
  tag: string,
  user: UserDto,
}
