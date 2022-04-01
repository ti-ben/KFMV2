import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailCredentialComponent } from './user-detail-credential.component';

describe('UserDetailCredentialComponent', () => {
  let component: UserDetailCredentialComponent;
  let fixture: ComponentFixture<UserDetailCredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailCredentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
