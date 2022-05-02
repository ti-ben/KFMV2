import {PayloadInterface} from '@shared/model';
import {Site} from "@site/model";

export interface NumberplateCreatePayload extends PayloadInterface {
  num_plate: string;
  dop: Date;
  active: string;
  site: Site;
}
