import { Numberplate } from '@numberplate/model/business';
import { NumberplateDto } from '@numberplate/model';

export class NumberplateHelper {
  public static fromDto(dto: NumberplateDto): Numberplate {
    return {
      numberplate_id: dto.numberplate_id,
      num_plate: dto.num_plate,
      dop: dto.dop
    }
  }
  public toDto(numberplate: Numberplate): NumberplateDto {
    return {
      numberplate_id: '',
      num_plate: '',
      dop: ''
    };
  }
}
