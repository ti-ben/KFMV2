import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberplateFormComponent } from './numberplate-form.component';

describe('NumberplateFormComponent', () => {
  let component: NumberplateFormComponent;
  let fixture: ComponentFixture<NumberplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberplateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
