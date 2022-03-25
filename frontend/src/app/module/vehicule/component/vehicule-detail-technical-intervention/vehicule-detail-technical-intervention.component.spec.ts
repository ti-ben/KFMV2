import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeDetailTechnicalInterventionComponent } from './vehicule-detail-technical-intervention.component';

describe('VehiculeDetailTechnicalInterventionComponent', () => {
  let component: VehiculeDetailTechnicalInterventionComponent;
  let fixture: ComponentFixture<VehiculeDetailTechnicalInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeDetailTechnicalInterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeDetailTechnicalInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
