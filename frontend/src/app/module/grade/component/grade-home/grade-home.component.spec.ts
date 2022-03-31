import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeHomeComponent } from './grade-home.component';

describe('GradeHomeComponent', () => {
  let component: GradeHomeComponent;
  let fixture: ComponentFixture<GradeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
