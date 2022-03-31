import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithMenuAndDestroyableComponent } from './with-menu-and-destroyable.component';

describe('WithMenuAndDestroyableComponent', () => {
  let component: WithMenuAndDestroyableComponent;
  let fixture: ComponentFixture<WithMenuAndDestroyableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithMenuAndDestroyableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithMenuAndDestroyableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
