import { Grade } from '@grade/model/business';
import { GradeDto } from '@grade/model';

export class GradeHelper {
  public static fromDto(dto: GradeDto): Grade {
    return {
      grade_id: dto.grade_id,
      name: dto.name,
      comment: dto.comment
    }
  }
  public toDto(grade: Grade): GradeDto {
    return {
      grade_id: grade.grade_id,
      name: grade.name,
      comment: grade.comment
    };
  }

  static getEmpty():Grade {
    return {
      grade_id: '',
      name: '',
      comment: ''
    };
  }

}
