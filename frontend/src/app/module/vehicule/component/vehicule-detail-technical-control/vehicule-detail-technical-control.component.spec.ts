import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeDetailTechnicalControlComponent } from './vehicule-detail-technical-control.component';

describe('VehiculeDetailTechnicalControlComponent', () => {
  let component: VehiculeDetailTechnicalControlComponent;
  let fixture: ComponentFixture<VehiculeDetailTechnicalControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeDetailTechnicalControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeDetailTechnicalControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
