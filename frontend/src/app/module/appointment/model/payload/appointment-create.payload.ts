import {PayloadInterface} from '@shared/model';
import {User} from "@user/model";

export interface AppointmentCreatePayload extends PayloadInterface {
  start_date: Date,
  end_date: Date,
  price: string,
  theme: string,
  comment: string,
  type: string,
  category: string,
  user: User,
  tag: string,
}
