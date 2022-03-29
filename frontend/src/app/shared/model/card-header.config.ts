import {MenuItem} from '@shared/model/menu-item.interface';
import {LabelWithParam} from '@shared/model/label-with-params';

export interface CardHeaderConfig {
  title: LabelWithParam,
  icon?: string;
  actions?: MenuItem[]
}
