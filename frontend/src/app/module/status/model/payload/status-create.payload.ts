import { PayloadInterface } from '@shared/model';

export interface StatusCreatePayload extends PayloadInterface {
  name: string;
  description: string;
}
