import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { PatientDetailsSheetComponent } from '../patient-details-sheet/patient-details-sheet.component';
import { PatientService } from '../../patient.service';
import { Patient } from '../../models/Patient';
import { HealthInsurance } from '../../models/HealthInsurance';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  _patientList: Observable<Patient[]> = of([]);
  searchName: string = '';
  wasSearched: boolean = false;

  constructor(private _bottomSheet: MatBottomSheet, private patientService: PatientService) { }

  ngOnInit(): void { }

  getGenderIcon(gender: string) {
    return gender == "F" ? "female" : "male";
  }

  getGenderName(gender: string) {
    return gender == "F" ? "Feminino" : "Masculino";
  }

  search() {
    this.wasSearched = true

    this._patientList = this.patientService.getPatientByQuery(this.searchName)
  }

  async handleActionClick(patient: Patient) {
    try {
      const healthInsurance: HealthInsurance | undefined = await this.patientService.getPatientDetailsById(patient.patientId).toPromise();

      patient.healthInsurance = healthInsurance;
      this.patientService.selectPatient(patient);
      this._bottomSheet.open(PatientDetailsSheetComponent);
    }
    catch (e) {
      console.log(e);
    }
  }
}
