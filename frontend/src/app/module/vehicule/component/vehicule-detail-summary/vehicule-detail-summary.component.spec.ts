import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeDetailSummaryComponent } from './vehicule-detail-summary.component';

describe('VehiculeDetailSummaryComponent', () => {
  let component: VehiculeDetailSummaryComponent;
  let fixture: ComponentFixture<VehiculeDetailSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeDetailSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeDetailSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
