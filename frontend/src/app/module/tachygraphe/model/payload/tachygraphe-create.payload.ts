import { PayloadInterface } from '@shared/model';
import {User} from "@user/model";

export interface TachygrapheCreatePayload extends PayloadInterface {
  start_date: Date;
  end_date: Date;
  num_carte: string;
  comment: string;
  user: User;
}
