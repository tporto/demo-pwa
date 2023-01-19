import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.scss']
})
export class PatientHistoryComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }
}
