import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeDetailIdentityComponent } from './vehicule-detail-identity.component';

describe('VehiculeDetailIdentityComponent', () => {
  let component: VehiculeDetailIdentityComponent;
  let fixture: ComponentFixture<VehiculeDetailIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeDetailIdentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeDetailIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
