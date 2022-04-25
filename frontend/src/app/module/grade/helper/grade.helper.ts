import {Grade} from '@grade/model/business';
import {GradeDto} from '@grade/model';
import {isNil} from 'lodash';
import {Status} from "@status/model";
import {SelectOption} from "@shared/model/select.config";
import {User} from "@user/model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

export class GradeHelper {
  public static fromDto(dto: GradeDto): Grade {
    if (isNil(dto)) {
      return GradeHelper.getEmpty();
    }
    return {
      grade_id: dto.grade_id,
      name: dto.name,
      comment: dto.comment,
      active: dto.active
    }
  }

  public static toDto(grade: Grade): GradeDto {
    return {
      grade_id: grade.grade_id,
      name: grade.name,
      comment: grade.comment,
      active: grade.active
    };
  }

  static getEmpty(): Grade {
    return {
      grade_id: '',
      name: '',
      comment: '',
      active: ''
    };
  }

  static fromDtoArray(data: GradeDto[]): Grade[] {
    return data.map((dto: GradeDto) => GradeHelper.fromDto(dto));
  }

  public static toFormGroup(grade: Grade = GradeHelper.getEmpty()): FormGroup {
    return new FormGroup({
      grade_id: new FormControl(grade.grade_id),
      name: new FormControl(grade.name, [Validators.required]),
      comment: new FormControl(grade.comment),
      active: new FormControl(grade.active)
    })
  }

  static toGradeOptionArray(list: Grade[]): SelectOption[] {
    return list.map((grade: Grade) => {
      return {value: grade.grade_id, label: grade.name};
    })
  }
}
