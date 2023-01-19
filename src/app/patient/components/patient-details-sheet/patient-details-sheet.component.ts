import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-patient-details-sheet',
  templateUrl: './patient-details-sheet.component.html',
  styleUrls: ['./patient-details-sheet.component.scss']
})
export class PatientDetailsSheetComponent implements OnInit {

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<PatientDetailsSheetComponent>,
    private router: Router,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
  }

  closeSheet(): void {
    this._bottomSheetRef.dismiss();
  }

  cancelSheet() {
    this.closeSheet()
    this.patientService.clearPatient()
  }

  clickChip() {
    this.closeSheet()
    this.router.navigate(['/patient/1/history'])
  }
}
