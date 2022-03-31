import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireHomeComponent } from './prestataire-home.component';

describe('PrestataireHomeComponent', () => {
  let component: PrestataireHomeComponent;
  let fixture: ComponentFixture<PrestataireHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestataireHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestataireHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
