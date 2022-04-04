import { SelectOption } from '@shared/model/select.config';

export class DriverHelper{
  static getSelectOption():SelectOption[]{
    return [
      {label:'driver-license.b', value:'b'},
      {label:'driver-license.c', value:'c'},
      {label:'driver-license.ce', value:'ce'}
    ]
  }
}
