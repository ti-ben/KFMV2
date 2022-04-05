import {SelectOption} from '@shared/model/select.config';
import {GenderEnum} from '@shared/model';

export class GenderHelper {
  static genSelectOption(): SelectOption[] {
    return [
      {label: 'gender.male', value: GenderEnum.MALE},
      {label: 'gender.female',value: GenderEnum.FEMALE},
      {label: 'gender.not_binary', value: GenderEnum.NOT_BINARY}
    ]
  }
}
