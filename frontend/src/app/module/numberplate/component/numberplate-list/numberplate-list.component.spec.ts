import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberplateListComponent } from './numberplate-list.component';

describe('NumberplateListComponent', () => {
  let component: NumberplateListComponent;
  let fixture: ComponentFixture<NumberplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberplateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
