import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeDetailComponent } from './vehicule-detail.component';

describe('VehiculeDetailComponent', () => {
  let component: VehiculeDetailComponent;
  let fixture: ComponentFixture<VehiculeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
