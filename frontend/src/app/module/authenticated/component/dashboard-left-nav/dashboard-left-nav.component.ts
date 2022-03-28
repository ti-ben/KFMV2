import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppRoute, MenuItem } from "@shared/model";
import { NavigationService } from '@shared/service/navigation.service';

@Component({
  selector: 'app-dashboard-left-nav',
  templateUrl: './dashboard-left-nav.component.html',
  styleUrls: ['../dashboard/dashboard.component.scss', './dashboard-left-nav.component.scss']
})
export class DashboardLeftNavComponent implements OnInit {
  @Input() showLongMenu = false;
  @Output() onChangeShowLongMenu = new EventEmitter<boolean>();
  menu: MenuItem[] = [];

  constructor(public navigation: NavigationService) {
  }

  ngOnInit(): void {
    this.menu = [
      {label: 'page.dashboard.menu.dashboard', link: AppRoute.DASHBOARD_HOME, icon: 'fa-gauge', active: false},
      {label: 'page.dashboard.menu.employee', link: AppRoute.USER_LIST, icon: 'fa-people-group', active: false},
      {label: 'page.dashboard.menu.car', link: AppRoute.VEHICULE_LIST, icon: 'fa-truck', active: false},
      {label: 'page.dashboard.menu.provider', link: AppRoute.PRESTATAIRE_LIST, icon: 'fa-recycle', active: false},
      {label: 'page.dashboard.menu.grade', link: AppRoute.GRADE_LIST, icon: 'fa-people-roof', active: false},
      {label: 'page.dashboard.menu.site', link: AppRoute.SITE_LIST, icon: 'fa-sitemap', active: false},
      {label: 'page.dashboard.menu.status', link: AppRoute.STATUS_LIST, icon: 'fa-signal', active: false},
      {label: 'page.dashboard.menu.numberplate', link: AppRoute.NUMBERPLATE_LIST, icon: 'fa-cog', active: false}
    ]
  }

  navigate(item: MenuItem): void {
    this.navigation.navigate(item)
  }
}
