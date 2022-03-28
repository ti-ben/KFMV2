import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLeftNavComponent } from './dashboard-left-nav.component';

describe('DashboardLeftNavComponent', () => {
  let component: DashboardLeftNavComponent;
  let fixture: ComponentFixture<DashboardLeftNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLeftNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLeftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
