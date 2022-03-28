import { AppRoute, MenuItemType } from '@shared/model/enum';

export interface MenuItem {
  icon?: string;
  label: string;
  link: string;
  active?: boolean;
  type: MenuItemType;
  data?: any;
}
