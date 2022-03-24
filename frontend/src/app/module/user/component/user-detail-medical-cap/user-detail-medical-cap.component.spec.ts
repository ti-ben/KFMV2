import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailMedicalCapComponent } from './user-detail-medical-cap.component';

describe('UserDetailMedicalCapComponent', () => {
  let component: UserDetailMedicalCapComponent;
  let fixture: ComponentFixture<UserDetailMedicalCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailMedicalCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailMedicalCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
