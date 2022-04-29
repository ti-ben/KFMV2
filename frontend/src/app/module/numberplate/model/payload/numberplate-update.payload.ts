import { PayloadInterface } from '@shared/model';

export interface NumberplateUpdatePayload extends PayloadInterface {
  numberplate_id: string;
  num_plate: string;
  dop: Date;
}
