import { Tachygraphe } from '@tachygraphe/model/business';
import { TachygrapheDto } from '@tachygraphe/model';
import {FormControl, FormGroup} from "@angular/forms";
import {UserHelper} from "@user/helper";
import {isNil} from "lodash";

export class  TachygrapheHelper {
  public static fromDto(dto: TachygrapheDto): Tachygraphe  {
    if (isNil(dto)) {
      return TachygrapheHelper.getEmpty();
    }
    return {
      tachygraphe_id: dto.tachygraphe_id,
      start_date: dto.start_date,
      end_date: dto.end_date,
      num_carte: dto.num_carte,
      comment: dto.comment,
      user: UserHelper.fromDto(dto.user)
    }
  }

  public toDto(tachygraphe: Tachygraphe): TachygrapheDto  {
    return {
      tachygraphe_id: tachygraphe.tachygraphe_id,
      start_date: new Date("dd/MM/yyyy"),
      end_date: new Date("dd/MM/yyyy"),
      num_carte: tachygraphe.num_carte,
      comment: tachygraphe.comment,
      user: UserHelper.toDto(tachygraphe.user)
    };
  }

  static getEmpty():Tachygraphe {
    return {
      tachygraphe_id: '',
      start_date: new Date("dd/MM/yyyy"),
      end_date: new Date("dd/MM/yyyy"),
      num_carte: '',
      comment: '',
      user: UserHelper.getEmpty()
    };
  }

  public static toFormGroup(tachygraphe: Tachygraphe = TachygrapheHelper.getEmpty()): FormGroup{
    return new FormGroup({
      start_date: new FormControl(tachygraphe.start_date.toString().slice(0,10)),
      end_date: new FormControl(tachygraphe.end_date.toString().slice(0,10)),
      num_carte: new FormControl(tachygraphe.num_carte),
      comment: new FormControl(tachygraphe.comment),
      user: new FormControl(tachygraphe.user)
    });
  }

  static fromDtoArray(data: TachygrapheDto[]): Tachygraphe[] {
    return data.map((dto: TachygrapheDto) => TachygrapheHelper.fromDto(dto));
  }
}
