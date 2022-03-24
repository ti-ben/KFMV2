import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailMedicalTachographComponent } from './user-detail-medical-tachograph.component';

describe('UserDetailMedicalTachographComponent', () => {
  let component: UserDetailMedicalTachographComponent;
  let fixture: ComponentFixture<UserDetailMedicalTachographComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailMedicalTachographComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailMedicalTachographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
