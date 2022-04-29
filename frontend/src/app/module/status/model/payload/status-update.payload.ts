import { PayloadInterface } from '@shared/model';

export interface StatusUpdatePayload extends PayloadInterface {
  status_id: string;
  name: string;
  description: string;
  active: string;
}
