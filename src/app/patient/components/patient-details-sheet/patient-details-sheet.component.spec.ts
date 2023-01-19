import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsSheetComponent } from './patient-details-sheet.component';

describe('PatientDetailsSheetComponent', () => {
  let component: PatientDetailsSheetComponent;
  let fixture: ComponentFixture<PatientDetailsSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDetailsSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailsSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
