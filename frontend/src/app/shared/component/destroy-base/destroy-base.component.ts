import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-destroy-base',
  templateUrl: './destroy-base.component.html',
  styleUrls: ['./destroy-base.component.scss']
})
export class DestroyBaseComponent implements OnInit, OnDestroy {
  destroyers$ = new Subject<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroyers$.next();
    this.destroyers$.complete();
  }

}
