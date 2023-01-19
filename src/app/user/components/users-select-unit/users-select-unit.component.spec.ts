import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSelectUnitComponent } from './users-select-unit.component';

describe('UsersSelectUnitComponent', () => {
  let component: UsersSelectUnitComponent;
  let fixture: ComponentFixture<UsersSelectUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersSelectUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSelectUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
