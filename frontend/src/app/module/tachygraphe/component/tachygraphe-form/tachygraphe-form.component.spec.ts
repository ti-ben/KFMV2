import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachygrapheFormComponent } from './tachygraphe-form.component';

describe('TachygrapheFormComponent', () => {
  let component: TachygrapheFormComponent;
  let fixture: ComponentFixture<TachygrapheFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TachygrapheFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TachygrapheFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
