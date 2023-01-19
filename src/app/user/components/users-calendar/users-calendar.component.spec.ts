import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCalendarComponent } from './users-calendar.component';

describe('UsersCalendarComponent', () => {
  let component: UsersCalendarComponent;
  let fixture: ComponentFixture<UsersCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
