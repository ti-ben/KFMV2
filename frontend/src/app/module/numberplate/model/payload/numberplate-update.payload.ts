import {PayloadInterface} from '@shared/model';
import {Site} from "@site/model";

export interface NumberplateUpdatePayload extends PayloadInterface {
  numberplate_id: string;
  num_plate: string;
  dop: Date;
  active: string;
  site: Site;
}
