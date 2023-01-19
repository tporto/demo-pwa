import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRecordsListComponent } from './patient-records-list.component';

describe('PatientRecordsListComponent', () => {
  let component: PatientRecordsListComponent;
  let fixture: ComponentFixture<PatientRecordsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRecordsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRecordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
