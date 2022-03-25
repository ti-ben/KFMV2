import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailSummaryComponent } from './user-detail-summary.component';

describe('UserDetailSummaryComponent', () => {
  let component: UserDetailSummaryComponent;
  let fixture: ComponentFixture<UserDetailSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
