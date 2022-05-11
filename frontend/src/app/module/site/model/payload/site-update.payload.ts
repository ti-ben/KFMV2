import { PayloadInterface } from '@shared/model';

export interface SiteUpdatePayload extends PayloadInterface {
  site_id: string;
  name: string;
  description: string;
  created_on: Date;
  active: string;
}
