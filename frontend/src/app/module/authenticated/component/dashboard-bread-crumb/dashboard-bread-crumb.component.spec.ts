import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBreadCrumbComponent } from './dashboard-bread-crumb.component';

describe('DashboardBreadCrumbComponent', () => {
  let component: DashboardBreadCrumbComponent;
  let fixture: ComponentFixture<DashboardBreadCrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBreadCrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBreadCrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
