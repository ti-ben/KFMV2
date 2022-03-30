import { MenuItem, MenuItemType } from '@shared/model';
import { MenuHelper } from '@shared/helper/menu.helper';

export class BreadcrumbHelper {
  public static genBreadCrumb(currentItem: MenuItem): MenuItem[] {
    let breadCrumb = [MenuHelper.dashboardMenuItem()];
    switch (currentItem.type) {
      case MenuItemType.USER_LIST: breadCrumb = BreadcrumbHelper.userHomeBreadCrumb(currentItem); break;
      case MenuItemType.USER_DETAIL: breadCrumb = BreadcrumbHelper.userDetailBreadCrumb(currentItem); break;
      case MenuItemType.USER_CREATE: breadCrumb = BreadcrumbHelper.userCreateBreadCrumb(currentItem); break;
      case MenuItemType.VEHICULE_LIST: breadCrumb = BreadcrumbHelper.carHomeBreadCrumb(currentItem); break;
      case MenuItemType.VEHICULE_DETAIL: breadCrumb = BreadcrumbHelper.carDetailBreadCrumb(currentItem); break;
      case MenuItemType.GRADE_LIST: breadCrumb = BreadcrumbHelper.gradeHomeBreadCrumb(currentItem); break;
      case MenuItemType.GRADE_DETAIL: breadCrumb = BreadcrumbHelper.gradeDetailBreadCrumb(currentItem); break;
      case MenuItemType.PRESTATAIRE_LIST: breadCrumb = BreadcrumbHelper.providerHomeBreadCrumb(currentItem); break;
      case MenuItemType.PRESTATAIRE_DETAIL: breadCrumb = BreadcrumbHelper.providerDetailBreadCrumb(currentItem); break;
      case MenuItemType.SITE_LIST: breadCrumb = BreadcrumbHelper.siteHomeBreadCrumb(currentItem); break;
      case MenuItemType.SITE_DETAIL: breadCrumb = BreadcrumbHelper.siteDetailBreadCrumb(currentItem); break;
      case MenuItemType.STATUS_LIST: breadCrumb = BreadcrumbHelper.statusHomeBreadCrumb(currentItem); break;
      case MenuItemType.STATUS_DETAIL: breadCrumb = BreadcrumbHelper.statusDetailBreadCrumb(currentItem); break;
      case MenuItemType.NUMBERPLATE_LIST: breadCrumb = BreadcrumbHelper.numberplateHomeBreadCrumb(currentItem); break;
      case MenuItemType.NUMBERPLATE_DETAIL: breadCrumb = BreadcrumbHelper.numberplateDetailBreadCrumb(currentItem); break;
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
  public static userCreateBreadCrumb(currentItem: MenuItem): MenuItem[] {
    return [MenuHelper.employeeMenuItem(), currentItem];
  }

  public static carHomeBreadCrumb(currentItem: MenuItem): MenuItem[] {
    return [MenuHelper.carMenuItem()];
  }

  public static carDetailBreadCrumb(currentItem: MenuItem): MenuItem[] {
    return [MenuHelper.carMenuItem(), currentItem];
  }

  public static gradeHomeBreadCrumb(currentItem: MenuItem): MenuItem[] {
    return [MenuHelper.gradeMenuItem()];
  }

  public static gradeDetailBreadCrumb(currentItem: MenuItem): MenuItem[] {
    return [MenuHelper.gradeMenuItem(), currentItem];
  }

  public static providerHomeBreadCrumb(currentItem: MenuItem): MenuItem[] {
    return [MenuHelper.providerMenuItem()];
  }

  public static providerDetailBreadCrumb(currentItem: MenuItem): MenuItem[] {
    return [MenuHelper.providerMenuItem(), currentItem];
  }

  public static siteHomeBreadCrumb(currentItem: MenuItem): MenuItem[] {
    return [MenuHelper.siteMenuItem()];
  }

  public static siteDetailBreadCrumb(currentItem: MenuItem): MenuItem[] {
    return [MenuHelper.siteMenuItem(), currentItem];
  }

  public static statusHomeBreadCrumb(currentItem: MenuItem): MenuItem[] {
    return [MenuHelper.statusMenuItem()];
  }

  public static statusDetailBreadCrumb(currentItem: MenuItem): MenuItem[] {
    return [MenuHelper.statusMenuItem(), currentItem];
  }

  public static numberplateHomeBreadCrumb(currentItem: MenuItem): MenuItem[] {
    return [MenuHelper.numberplateMenuItem()];
  }

  public static numberplateDetailBreadCrumb(currentItem: MenuItem): MenuItem[] {
    return [MenuHelper.numberplateMenuItem(), currentItem];
  }
}
