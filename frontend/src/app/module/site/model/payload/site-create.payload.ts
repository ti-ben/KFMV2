import {PayloadInterface} from '@shared/model';

export interface SiteCreatePayload extends PayloadInterface {
  name: string;
  description: string;
  created_on: Date;
  active: String;
}
