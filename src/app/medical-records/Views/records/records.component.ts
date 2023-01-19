import { Component, Input, OnInit } from '@angular/core';
import { MedicalRecord } from '../../Interfaces/MedicalRecord';
import { MedicalRecordsService } from '../../Services/medical-records.service';

@Component({
  selector: 'mr-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent {

  private _listMedicalRecords: MedicalRecord[] = [];
  get listMedicalRecords(): MedicalRecord[] {
    return this.listMedicalRecords;
  }
  set listMedicalRecords(value: MedicalRecord[]) {
    this._listMedicalRecords = value;
  }

  private _idPatient: number | null = null;
  get idPatient(): number | null {
    return this._idPatient;
  }
  set idPatient(value: number | null) {
    this._idPatient = value;
    if (this.idPatient) {
      this.getAllMedicalRecords(this.idPatient);
    }
  }

  private _title: string = 'Records';
  get title(): string {
    return this._title;
  }
  @Input('title') set in(value: string) {
    this._title = value;
  }

  constructor(
    private _service: MedicalRecordsService = new MedicalRecordsService(),
  ) { }

  getAllMedicalRecords(idPatient: number) {
    this._service.getMedicalRecords(idPatient).subscribe(
      (medicalRecords) => { this.listMedicalRecords = medicalRecords; }
    );
  }

}
