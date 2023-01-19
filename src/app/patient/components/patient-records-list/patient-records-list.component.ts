import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Record } from '../../models/Record';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-patient-records-list',
  templateUrl: './patient-records-list.component.html',
  styleUrls: ['./patient-records-list.component.scss']
})
export class PatientRecordsListComponent implements OnInit {

  _recordsList: Observable<Record[]> = of([]);

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this._recordsList = this.patientService.getPatientRecords()
  }

}
