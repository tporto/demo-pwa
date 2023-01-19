import { PatientDetailsSheetComponent } from './../../../patient/components/patient-details-sheet/patient-details-sheet.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { HealthInsurance } from 'src/app/patient/models/HealthInsurance';
import { Patient } from 'src/app/patient/models/Patient';
import { PatientService } from 'src/app/patient/patient.service';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet, private patientService: PatientService) { }

  ngOnInit(): void {
  }

  @Input() list!: any[]

  getShortTime(value: string): string {
    return value.slice(0, 5)
  }

  async onShowModalPatient(schedule: any) {
    try {
      this.patientService.getPatientUserById(schedule.codPaciente).subscribe({
        next: (value) => {
          const patient: Patient = Patient.buildFromObject(value);
          patient.healthInsurance = HealthInsurance.buildFromObject(value)

          this.patientService.selectPatient(patient);
          this._bottomSheet.open(PatientDetailsSheetComponent);
        }
      });
    }
    catch (e) {
      console.log(e);
    }
  }
}
