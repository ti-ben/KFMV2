import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeHomeComponent } from './vehicule-home.component';

describe('VehiculeHomeComponent', () => {
  let component: VehiculeHomeComponent;
  let fixture: ComponentFixture<VehiculeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
