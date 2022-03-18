import { Component, OnInit } from '@angular/core';
import { AppRoute, MenuItem } from '@shared/model';
import { Router } from '@angular/router';

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
      {label: 'page.dashboard.menu.home', link: AppRoute.DASHBOARD_HOME, icon: 'fa-home', active: true},
      {label: 'page.dashboard.menu.dashboard', link: AppRoute.DASHBOARD_HOME, icon: 'fa-dashboard', active: false},
      {label: 'page.dashboard.menu.employee', link: AppRoute.USER_LIST, icon: 'fa-people-group', active: false},
      /*   { label:'page.dashboard.menu.car',link:'',icon:'fa-truck',active:false },
         { label:'page.dashboard.menu.prestataire',link:'',icon:'fa-recycle',active:false },
         { label:'page.dashboard.menu.role',link:'',icon:'fa-ranking-star',active:false },
         { label:'page.dashboard.menu.statuts',link:'',icon:'fa-signal',active:false },
         { label:'page.dashboard.menu.immatriculations',link:'',icon:'fa-cog',active:false }*/
    ]

  }

  navigate(link: AppRoute): void {
    this.router.navigate([link]).then();
  }
}
