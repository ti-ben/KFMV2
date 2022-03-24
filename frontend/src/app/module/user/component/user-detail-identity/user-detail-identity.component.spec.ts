import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailIdentityComponent } from './user-detail-identity.component';

describe('UserDetailIdentityComponent', () => {
  let component: UserDetailIdentityComponent;
  let fixture: ComponentFixture<UserDetailIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailIdentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
