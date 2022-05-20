import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '@shared/service/navigation.service';
import {AuthService} from "../../../../security";

@Component({
  selector: 'app-dashboard-top-nav',
  templateUrl: './dashboard-top-nav.component.html',
  styleUrls: ['../dashboard/dashboard.component.scss', './dashboard-top-nav.component.scss']
})
export class DashboardTopNavComponent implements OnInit {
  @Input() showLongMenu = false;

  showLanguageMenu = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onClick(data: string) {
  }

  onClickOutSideMenuLanguage() {
    if (this.showLanguageMenu) {
      this.showLanguageMenu = false;
    }
  }

  logout() {
this.authService.logout();
  }
}
