import {SelectOption} from '@shared/model/select.config';

export class ActifHelper {
  static actifSelectOption(): SelectOption[] {
    return [
      {label: 'common.true', value: true},
      {label: 'common.false', value: false}
    ]
  }
}
