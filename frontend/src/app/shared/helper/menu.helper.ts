import { AppRoute, MenuItem, MenuItemType } from '@shared/model';

export class MenuHelper {
  public static guestMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.invite', link: AppRoute.GUEST,
      type: MenuItemType.GUEST, icon: 'fa-gauge', active: false
    };
  }

  public static dashboardMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.dashboard', link: AppRoute.DASHBOARD_HOME,
      type: MenuItemType.DASHBOARD_HOME, icon: 'fa-gauge', active: false
    };
  }

  /*
    Employee part
   */

  public static employeeMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.employee',
      link: AppRoute.USER_LIST,
      type: MenuItemType.USER_LIST,
      icon: 'fa-people-group',
      active: false
    };
  }

  public static employeeDetailMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.detail',
      link: AppRoute.USER_DETAIL,
      type: MenuItemType.USER_DETAIL,
      icon: 'fa-people-group',
      active: false
    };
  }

  public static carMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.car', link: AppRoute.VEHICULE_LIST,
      type: MenuItemType.VEHICULE_LIST, icon: 'fa-truck', active: false
    };
  }

  public static providerMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.provider', link: AppRoute.PRESTATAIRE_LIST,
      type: MenuItemType.PRESTATAIRE_LIST, icon: 'fa-recycle', active: false
    };
  }

  public static gradeMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.grade', link: AppRoute.GRADE_LIST,
      type: MenuItemType.GRADE_LIST, icon: 'fa-people-roof', active: false
    };
  }

  public static siteMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.site', link: AppRoute.SITE_LIST,
      type: MenuItemType.SITE_LIST, icon: 'fa-sitemap', active: false
    };
  }

  public static statusMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.status', link: AppRoute.STATUS_LIST,
      type: MenuItemType.STATUS_LIST, icon: 'fa-signal', active: false
    };
  }

  public static numberplateMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.numberplate', link: AppRoute.NUMBERPLATE_LIST,
      type: MenuItemType.NUMBERPLATE_LIST, icon: 'fa-cog', active: false
    };
  }

  public static getPrincipalMenu(): MenuItem[] {
    return [
      MenuHelper.dashboardMenuItem(),
      MenuHelper.employeeMenuItem(),
      MenuHelper.carMenuItem(),
      MenuHelper.providerMenuItem(),
      MenuHelper.gradeMenuItem(),
      MenuHelper.siteMenuItem(),
      MenuHelper.statusMenuItem(),
      MenuHelper.numberplateMenuItem()
    ]
  }

  public static getAll(): MenuItem[] {

    return [
      MenuHelper.guestMenuItem(),
      MenuHelper.dashboardMenuItem(),
      MenuHelper.employeeMenuItem(),
      MenuHelper.employeeDetailMenuItem(),
      MenuHelper.carMenuItem(),
      MenuHelper.providerMenuItem(),
      MenuHelper.gradeMenuItem(),
      MenuHelper.siteMenuItem(),
      MenuHelper.statusMenuItem(),
      MenuHelper.numberplateMenuItem()
    ]
  }

}
