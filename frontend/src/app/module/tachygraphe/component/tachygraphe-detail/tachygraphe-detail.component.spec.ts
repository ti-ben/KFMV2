import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachygrapheDetailComponent } from './tachygraphe-detail.component';

describe('TachygrapheDetailComponent', () => {
  let component: TachygrapheDetailComponent;
  let fixture: ComponentFixture<TachygrapheDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TachygrapheDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TachygrapheDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
