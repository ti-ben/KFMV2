import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailTachographComponent } from './user-detail-tachograph.component';

describe('UserDetailTachographComponent', () => {
  let component: UserDetailTachographComponent;
  let fixture: ComponentFixture<UserDetailTachographComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailTachographComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailTachographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
