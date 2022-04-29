import { PayloadInterface } from '@shared/model';

export interface PrestataireCreatePayload extends PayloadInterface {
  name: string;
  tel: string;
  email: string;
  service: string;
  active: string;
}
