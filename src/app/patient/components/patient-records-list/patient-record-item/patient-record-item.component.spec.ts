import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRecordItemComponent } from './patient-record-item.component';

describe('PatientRecordItemComponent', () => {
  let component: PatientRecordItemComponent;
  let fixture: ComponentFixture<PatientRecordItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRecordItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRecordItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
