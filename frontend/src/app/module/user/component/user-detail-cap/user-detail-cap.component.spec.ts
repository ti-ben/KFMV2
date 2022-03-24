import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailCapComponent } from './user-detail-cap.component';

describe('UserDetailCapComponent', () => {
  let component: UserDetailCapComponent;
  let fixture: ComponentFixture<UserDetailCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
