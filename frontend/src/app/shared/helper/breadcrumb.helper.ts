import { MenuItem, MenuItemType } from '@shared/model';
import { MenuHelper } from '@shared/helper/menu.helper';

export class BreadcrumbHelper {
  public static genBreadCrumb(currentItem: MenuItem): MenuItem[] {
    let breadCrumb = [MenuHelper.dashboardMenuItem()];
    switch (currentItem.type) {
      case MenuItemType.USER_LIST: breadCrumb = BreadcrumbHelper.userHomeBreadCrumb(currentItem); break;
      case MenuItemType.USER_DETAIL: breadCrumb = BreadcrumbHelper.userDetailBreadCrumb(currentItem); break;
    }
    return breadCrumb;
  }

  // Breadcrumb user -----------------------------------------------------------
  public static userHomeBreadCrumb(currentItem: MenuItem): MenuItem[] {
    return [MenuHelper.employeeMenuItem()];
  }

  public static userDetailBreadCrumb(currentItem: MenuItem): MenuItem[] {
    return [MenuHelper.employeeMenuItem(), currentItem];
  }
}
