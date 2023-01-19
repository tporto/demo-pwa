import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Record } from '../../models/Record';
import { PatientService } from '../../patient.service';
import { Story } from '../../models/Story';

@Component({
  selector: 'app-patient-records',
  templateUrl: './patient-records.component.html',
  styleUrls: ['./patient-records.component.scss']
})
export class PatientRecordsComponent implements OnInit {
  record: Record | undefined;
  stories: Story[];
  patientId: number = 0;
  codEmpresa: number = -1;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService
  ) {
    this.stories = [];
  }

  ngOnInit(): void {
    const recordId = this.route.snapshot.paramMap.get('recordId');

    if (recordId) {
      this.patientService.getPatientRecordById(recordId).subscribe({
        next: (record) => this.record = record,
        error: (error) => console.log(error)
      });

      this.patientService.getEmpresa().subscribe(value => this.codEmpresa = value ?? 0)
    } else {
      console.log("recordId param is required");
    }
  }

  goBack() {
    this.location.back();
  }

  goHome() {
    this.router.navigate(['home']);
  }
}
