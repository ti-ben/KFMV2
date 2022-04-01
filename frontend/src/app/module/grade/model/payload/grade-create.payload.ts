import { PayloadInterface } from '@shared/model';

export interface GradeCreatePayload extends PayloadInterface {
  name: string;
  description: string;
}
