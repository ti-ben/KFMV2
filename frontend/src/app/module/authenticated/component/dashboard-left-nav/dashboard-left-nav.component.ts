import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from "@shared/model";
import { NavigationService } from '@shared/service/navigation.service';
import { MenuHelper } from '@shared/helper/menu.helper';

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
    this.menu = MenuHelper.getPrincipalMenu();
  }

  navigate(item: MenuItem): void {
    this.navigation.navigate(item)
  }
}
