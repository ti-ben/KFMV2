import { AppRoute } from '@shared/model/enum';

export interface MenuItem {
  icon?: string;
  label: string;
  link: AppRoute;
  active: boolean;
}
