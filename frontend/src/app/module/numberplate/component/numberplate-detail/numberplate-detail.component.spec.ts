import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberplateDetailComponent } from './numberplate-detail.component';

describe('NumberplateDetailComponent', () => {
  let component: NumberplateDetailComponent;
  let fixture: ComponentFixture<NumberplateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberplateDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberplateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
