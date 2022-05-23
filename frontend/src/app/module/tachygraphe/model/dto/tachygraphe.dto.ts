import {User} from "@user/model";

export interface TachygrapheDto {
  tachygraphe_id: string;
  start_date: Date;
  end_date: Date;
  num_carte: string;
  comment: string;
  user: User;
}
