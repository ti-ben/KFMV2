import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailMedicalAdrComponent } from './user-detail-medical-adr.component';

describe('UserDetailMedicalAdrComponent', () => {
  let component: UserDetailMedicalAdrComponent;
  let fixture: ComponentFixture<UserDetailMedicalAdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailMedicalAdrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailMedicalAdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
