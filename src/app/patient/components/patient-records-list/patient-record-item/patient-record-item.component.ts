import { Component, Input, OnInit } from '@angular/core';
import { Record } from 'src/app/patient/models/Record';

@Component({
  selector: 'app-patient-record-item',
  templateUrl: './patient-record-item.component.html',
  styleUrls: ['./patient-record-item.component.scss']
})
export class PatientRecordItemComponent implements OnInit {

  @Input() showLine: boolean = true;
  @Input() record!: Record;

  constructor() { }

  ngOnInit(): void { }

  getRouterLink() {
    return `/patient/1/records/${this.record.id}`;
  }
}
