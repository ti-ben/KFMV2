import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberplateHomeComponent } from './numberplate-home.component';

describe('NumberplateHomeComponent', () => {
  let component: NumberplateHomeComponent;
  let fixture: ComponentFixture<NumberplateHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberplateHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberplateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
