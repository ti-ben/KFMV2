import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailAdrComponent } from './user-detail-adr.component';

describe('UserDetailAdrComponent', () => {
  let component: UserDetailAdrComponent;
  let fixture: ComponentFixture<UserDetailAdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailAdrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailAdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
