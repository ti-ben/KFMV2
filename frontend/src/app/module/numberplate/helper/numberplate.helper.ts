import { Numberplate } from '@numberplate/model/business';
import { NumberplateDto } from '@numberplate/model';
import {isNil} from "lodash";
import {FormControl, FormGroup} from "@angular/forms";
import {Grade} from "@grade/model";
import {SelectOption} from "@shared/model";
import {SiteHelper} from "@site/helper";

export class NumberplateHelper {
  public static fromDto(dto: NumberplateDto): Numberplate {
    if (isNil(dto)) {
      return NumberplateHelper.getEmpty();
    }
    return {
      numberplate_id: dto.numberplate_id,
      num_plate: dto.num_plate,
      dop: dto.dop,
      active: dto.active,
      site: SiteHelper.fromDto(dto.site)
    }
  }
  public static toDto(numberplate: Numberplate): NumberplateDto {
    return {
      numberplate_id: numberplate.numberplate_id,
      num_plate: numberplate.num_plate,
      dop: new Date(),
      active: numberplate.active,
      site: SiteHelper.toDto(numberplate.site)
    };
  }
  static getEmpty():Numberplate {
    return {
      numberplate_id: '',
      num_plate: '',
      dop: new Date(),
      active: '',
      site: SiteHelper.getEmpty()
    };
  }


  public static toFormGroup(numberplate: Numberplate = NumberplateHelper.getEmpty()) : FormGroup {
    return new FormGroup({
      numberplate_id: new FormControl(numberplate.numberplate_id),
      num_plate: new FormControl(numberplate.num_plate),
      dop: new FormControl(numberplate.dop),
      active: new FormControl(numberplate.active),
      site: new FormControl(numberplate.site.name)
    });
  }

  static fromDtoArray(data: NumberplateDto[]): Numberplate[] {
    return data.map((dto: NumberplateDto) => NumberplateHelper.fromDto(dto));
  }

  static toNumberplateOptionArray(list: Numberplate[]): SelectOption[] {
    return list.map((numberplate: Numberplate) => {
      return {value: numberplate.numberplate_id, label: numberplate.num_plate};
    })
  }

}
