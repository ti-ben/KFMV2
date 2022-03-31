import {Component, OnInit} from '@angular/core';
import {takeUntil, tap} from 'rxjs/operators';
import {NavigationService} from '@shared/service/navigation.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-with-menu-and-destroyable',
  templateUrl: './with-menu-and-destroyable.component.html',
  styleUrls: ['./with-menu-and-destroyable.component.scss']
})
export class WithMenuAndDestroyableBaseComponent implements OnInit {

  destroyers$ = new Subject<void>();
  showLongMenu = false;

  constructor(public navigation: NavigationService) {
    this.navigation.showLongMenu$
      .pipe(takeUntil(this.destroyers$),
        tap((show: boolean) => this.showLongMenu = show))
      .subscribe();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroyers$.next();
    this.destroyers$.complete();
  }

}
