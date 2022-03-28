import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationService } from '@shared/service/navigation.service';
import { DestroyBaseComponent } from '@shared/component/destroy-base/destroy-base.component';
import { takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '@shared/model';
import { MenuHelper } from '@shared/helper/menu.helper';
import { BreadcrumbHelper } from '@shared/helper/breadcrumb.helper';

@Component({
  selector: 'app-dashboard-bread-crumb',
  templateUrl: './dashboard-bread-crumb.component.html',
  styleUrls: ['./dashboard-bread-crumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardBreadCrumbComponent extends DestroyBaseComponent implements OnInit {
  breadCrumb$ = new BehaviorSubject<MenuItem[]>([MenuHelper.dashboardMenuItem()]);
  currentItem: MenuItem = MenuHelper.dashboardMenuItem();

  constructor(public navigation: NavigationService) {
    super();
  }

  ngOnInit(): void {
    this.navigation.currentMenuItem$
      .pipe(
        takeUntil(this.destroyers$),
        tap((currentItem: MenuItem) => {
          this.currentItem = currentItem;
          this.breadCrumb$.next(BreadcrumbHelper.genBreadCrumb(currentItem));
        }))
      .subscribe();
  }

  onClick(item: MenuItem) {
    if (this.currentItem.type !== item.type) {
      this.navigation.navigate(item)
    }
  }
}
