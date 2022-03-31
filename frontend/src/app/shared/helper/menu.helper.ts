import {AppRoute, MenuItem, MenuItemType} from '@shared/model';

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

  /* Employee part */

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

  public static employeeCreateMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.create',
      link: AppRoute.USER_CREATE,
      type: MenuItemType.USER_CREATE,
      icon: 'fa-people-group',
      active: false
    };
  }

  /* Car part */

  public static carMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.car',
      link: AppRoute.VEHICULE_LIST,
      type: MenuItemType.VEHICULE_LIST,
      icon: 'fa-truck', active: false
    };
  }

  public static carDetailMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.Detail',
      link: AppRoute.VEHICULE_DETAIL,
      type: MenuItemType.VEHICULE_DETAIL,
      icon: 'fa-truck', active: false
    };
  }

  public static carCreateMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.create',
      link: AppRoute.VEHICULE_CREATE,
      type: MenuItemType.VEHICULE_CREATE,
      icon: 'fa-people-group',
      active: false
    };
  }

  /* Provider part */

  public static providerMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.provider',
      link: AppRoute.PRESTATAIRE_LIST,
      type: MenuItemType.PRESTATAIRE_LIST,
      icon: 'fa-recycle', active: false
    };
  }

  public static providerDetailMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.detail',
      link: AppRoute.PRESTATAIRE_DETAIL,
      type: MenuItemType.PRESTATAIRE_DETAIL,
      icon: 'fa-recycle', active: false
    };
  }

  public static providerCreateMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.create',
      link: AppRoute.PRESTATAIRE_CREATE,
      type: MenuItemType.PRESTATAIRE_CREATE,
      icon: 'fa-recycle', active: false
    };
  }

  /* Grade part */

  public static gradeMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.grade',
      link: AppRoute.GRADE_LIST,
      type: MenuItemType.GRADE_LIST,
      icon: 'fa-people-roof', active: false
    };
  }

  public static gradeDetailMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.detail',
      link: AppRoute.GRADE_DETAIL,
      type: MenuItemType.GRADE_DETAIL,
      icon: 'fa-people-roof', active: false
    };
  }

  public static gradeCreateMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.create',
      link: AppRoute.GRADE_CREATE,
      type: MenuItemType.GRADE_CREATE,
      icon: 'fa-people-roof', active: false
    };
  }

  /* Site part */

  public static siteMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.site',
      link: AppRoute.SITE_LIST,
      type: MenuItemType.SITE_LIST,
      icon: 'fa-sitemap', active: false
    };
  }

  public static siteDetailMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.detail',
      link: AppRoute.SITE_DETAIL,
      type: MenuItemType.SITE_DETAIL,
      icon: 'fa-sitemap', active: false
    };
  }

  public static siteCreateMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.create',
      link: AppRoute.SITE_CREATE,
      type: MenuItemType.SITE_CREATE,
      icon: 'fa-sitemap', active: false
    };
  }

  /* Status part */

  public static statusMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.status',
      link: AppRoute.STATUS_LIST,
      type: MenuItemType.STATUS_LIST,
      icon: 'fa-signal', active: false
    };
  }

  public static statusDetailMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.detail',
      link: AppRoute.STATUS_DETAIL,
      type: MenuItemType.STATUS_DETAIL,
      icon: 'fa-signal', active: false
    };
  }

  public static statusCreateMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.create',
      link: AppRoute.STATUS_CREATE,
      type: MenuItemType.STATUS_CREATE,
      icon: 'fa-signal', active: false
    };
  }

  /* Numberplate part */

  public static numberplateMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.numberplate',
      link: AppRoute.NUMBERPLATE_LIST,
      type: MenuItemType.NUMBERPLATE_LIST,
      icon: 'fa-cog', active: false
    };
  }

  public static numberplateDetailMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.detail',
      link: AppRoute.NUMBERPLATE_DETAIL,
      type: MenuItemType.NUMBERPLATE_DETAIL,
      icon: 'fa-cog', active: false
    };
  }

  public static numberplateCreateMenuItem(): MenuItem {
    return {
      label: 'page.dashboard.menu.create',
      link: AppRoute.NUMBERPLATE_CREATE,
      type: MenuItemType.NUMBERPLATE_CREATE,
      icon: 'fa-cog', active: false
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
      MenuHelper.carDetailMenuItem(),
      MenuHelper.providerMenuItem(),
      MenuHelper.providerDetailMenuItem(),
      MenuHelper.gradeMenuItem(),
      MenuHelper.gradeDetailMenuItem(),
      MenuHelper.siteMenuItem(),
      MenuHelper.siteDetailMenuItem(),
      MenuHelper.statusMenuItem(),
      MenuHelper.statusDetailMenuItem(),
      MenuHelper.numberplateMenuItem(),
      MenuHelper.numberplateDetailMenuItem()
    ]
  }

}
