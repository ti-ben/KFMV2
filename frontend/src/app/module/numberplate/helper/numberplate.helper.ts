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
  public static toDto(numberplate: Numberplate): NumberplateDto {
    return {
      numberplate_id: numberplate.numberplate_id,
      num_plate: numberplate.num_plate,
      dop: new Date()
    };
  }
  static getEmpty():Numberplate {
    return {
      numberplate_id: '',
      num_plate: '',
      dop: new Date()
    };
  }

  static fromDtoArray(data: NumberplateDto[]): Numberplate[] {
    return data.map((dto: NumberplateDto) => NumberplateHelper.fromDto(dto));
  }
}
