import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireFormComponent } from './prestataire-form.component';

describe('PrestataireFormComponent', () => {
  let component: PrestataireFormComponent;
  let fixture: ComponentFixture<PrestataireFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestataireFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestataireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
