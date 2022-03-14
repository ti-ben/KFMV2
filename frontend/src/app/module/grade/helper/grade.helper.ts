import { Grade } from '@grade/model/business';
import { GradeDto } from '@grade/model';

export class UserHelper {
  public static fromDto(dto: GradeDto): Grade {
    return {
      grade_id: dto.grade_id,
      name: dto.name,
      comment: dto.comment
    }
  }
  public toDto(grade: Grade): GradeDto {
    return {
      grade_id: '',
      name: '',
      comment: ''
    };
  }
}
