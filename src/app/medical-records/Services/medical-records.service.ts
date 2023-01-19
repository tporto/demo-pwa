import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MedicalRecord } from '../Interfaces/MedicalRecord';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordsService {
  // /atendimentos
  getMedicalRecords(idPatient: number): Observable<MedicalRecord[]> {
    console.warn('ID PACIENTE: ', idPatient);
    return of([]);
  }
}
