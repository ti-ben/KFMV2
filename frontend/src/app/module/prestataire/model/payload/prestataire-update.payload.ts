import { PayloadInterface } from '@shared/model';

export interface PrestataireUpdatePayload extends PayloadInterface {
  prestataire_id: string;
  name: string;
  tel: string;
  email: string;
  service: string;
  active: string;
}
