import { SelectOption } from '@shared/model/select.config';

export class DriverHelper{
  static getSelectOption():SelectOption[]{
    return [
      {label:'driver-license.b', value:'B'},
      {label:'driver-license.c', value:'C'},
      {label:'driver-license.ce', value:'CE'},
      {label:'driver-license.cce', value:'C/CE'},
      {label:'driver-license.de', value:'DE'}
    ]
  }
}
