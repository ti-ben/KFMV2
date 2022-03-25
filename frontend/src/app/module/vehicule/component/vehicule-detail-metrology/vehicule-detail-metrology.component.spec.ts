import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeDetailMetrologyComponent } from './vehicule-detail-metrology.component';

describe('VehiculeDetailMetrologyComponent', () => {
  let component: VehiculeDetailMetrologyComponent;
  let fixture: ComponentFixture<VehiculeDetailMetrologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeDetailMetrologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeDetailMetrologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
