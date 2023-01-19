import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  @Input() hideBody: boolean = false
  patient: Observable<any> = of({})

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patient = this.patientService.getPatient()
  }
}
