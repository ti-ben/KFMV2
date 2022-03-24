import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailMedicalSelectionComponent } from './user-detail-medical-selection.component';

describe('UserDetailMedicalSelectionComponent', () => {
  let component: UserDetailMedicalSelectionComponent;
  let fixture: ComponentFixture<UserDetailMedicalSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailMedicalSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailMedicalSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
