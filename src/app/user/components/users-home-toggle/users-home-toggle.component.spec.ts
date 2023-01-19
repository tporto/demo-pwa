import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersHomeToggleComponent } from './users-home-toggle.component';

describe('UsersHomeToggleComponent', () => {
  let component: UsersHomeToggleComponent;
  let fixture: ComponentFixture<UsersHomeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersHomeToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersHomeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
