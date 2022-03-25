import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeDetailAdrComponent } from './vehicule-detail-adr.component';

describe('VehiculeDetailAdrComponent', () => {
  let component: VehiculeDetailAdrComponent;
  let fixture: ComponentFixture<VehiculeDetailAdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeDetailAdrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeDetailAdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
