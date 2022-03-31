import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@shared/service/navigation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showLongMenu = false;

  constructor(public navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.navigationService.showLongMenu$.subscribe((show: boolean) => this.showLongMenu = show);
  }
}
