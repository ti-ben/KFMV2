import {User} from "@user/model";

export interface Appointment {
  appointment_id: string;
  start_date: Date;
  end_date: Date;
  price: string;
  theme: string;
  comment: string;
  type: string;
  category: string;
  tag: string;
  //user: User;
}
