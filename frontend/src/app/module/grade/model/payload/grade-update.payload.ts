import { PayloadInterface } from '@shared/model';

export interface GradeUpdatePayload extends PayloadInterface {
  grade_id: string;
  name: string;
  comment: string;
  active: string;
}
