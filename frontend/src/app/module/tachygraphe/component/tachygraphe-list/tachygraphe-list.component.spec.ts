import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachygrapheListComponent } from './tachygraphe-list.component';

describe('TachygrapheListComponent', () => {
  let component: TachygrapheListComponent;
  let fixture: ComponentFixture<TachygrapheListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TachygrapheListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TachygrapheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
