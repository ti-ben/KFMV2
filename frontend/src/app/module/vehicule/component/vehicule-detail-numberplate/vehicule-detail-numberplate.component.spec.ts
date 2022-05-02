import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeDetailNumberplateComponent } from './vehicule-detail-numberplate.component';

describe('VehiculeDetailNumberplateComponent', () => {
  let component: VehiculeDetailNumberplateComponent;
  let fixture: ComponentFixture<VehiculeDetailNumberplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeDetailNumberplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeDetailNumberplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
