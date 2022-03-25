import { AppRoute, MenuItemType } from '@shared/model/enum';

export interface MenuItem {
  icon?: string;
  label: string;
  link: AppRoute;
  active?: boolean;
  type?: MenuItemType;
  data?: any;
}
