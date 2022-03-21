import {Component, OnInit} from '@angular/core';
import {AppRoute, MenuItem} from '@shared/model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menu: MenuItem[] = [];

  constructor(public router: Router) {
  }

  ngOnInit(): void {
    this.menu = [
      {label: 'page.dashboard.menu.dashboard', link: AppRoute.DASHBOARD_HOME, icon: 'fa-gauge', active: false},
      {label: 'page.dashboard.menu.employee', link: AppRoute.USER_LIST, icon: 'fa-people-group', active: false},
      {label: 'page.dashboard.menu.car', link: AppRoute.VEHICULE_LIST, icon: 'fa-truck', active: false},
      {label: 'page.dashboard.menu.provider', link: AppRoute.PRESTATAIRE_LIST, icon: 'fa-recycle', active: false},
      {label: 'page.dashboard.menu.role', link: AppRoute.GRADE_LIST, icon: 'fa-people-roof', active: false},
      {label: 'page.dashboard.menu.site', link: AppRoute.SITE_LIST, icon: 'fa-sitemap', active: false},
      {label: 'page.dashboard.menu.status', link: AppRoute.STATUS_LIST, icon: 'fa-signal', active: false},
      {label: 'page.dashboard.menu.numberplate', link: AppRoute.NUMBERPLATE_LIST, icon: 'fa-cog', active: false}
    ]
  }

  navigate(link: AppRoute): void {
    this.router.navigate([link]).then();
  }
}
