import { LabelWithParam } from '@shared/model/label-with-params';
import { FormControl } from '@angular/forms';


export interface SelectConfig {
  values: SelectOption[];
  label: LabelWithParam;
  placeholder: string;
  selected: any;
  ctrl: FormControl;
}

export interface SelectOption {
  value: any;
  label: string;
}
