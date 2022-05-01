import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailAddressComponent } from './user-detail-address.component';

describe('UserDetailAddressComponent', () => {
  let component: UserDetailAddressComponent;
  let fixture: ComponentFixture<UserDetailAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
