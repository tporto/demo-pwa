import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HealthInsurance } from './models/HealthInsurance';
import { Patient } from './models/Patient';
import { Record } from './models/Record';
import { Story } from './models/Story';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private readonly API_CW = environment.clinicweb.api;
  private readonly API_EHR = environment.clinicweb.ehr;

  private selectedPatient: Observable<Patient | null>;
  private selectedPatientSubject: BehaviorSubject<Patient | null>;
  private pacientId?: number;

  private selectedEmpresa: Observable<number | null>;
  private selectedEmpresaSubject: BehaviorSubject<number | null>;

  constructor(private http: HttpClient) {
    this.selectedPatientSubject = new BehaviorSubject<Patient | null>(null);
    this.selectedPatient = this.selectedPatientSubject.asObservable();

    this.selectedEmpresaSubject = new BehaviorSubject<number | null>(null);
    this.selectedEmpresa = this.selectedEmpresaSubject.asObservable();
  }

  selectPatient(patient: Patient) {
    this.pacientId = patient.id;
    this.selectedPatientSubject.next(patient);
  }

  selectEmpresa(id: number) {
    this.selectedEmpresaSubject.next(id)
  }

  getEmpresa() {
    return this.selectedEmpresa;
  }

  clearPatient() {
    this.selectedPatientSubject.next(null);
  }

  getPatient() {
    return this.selectedPatient;
  }

  getPatientByQuery(query: string): Observable<Patient[]> {
    const endpoint = `${this.API_CW}/pacientes?codEmpresa=-1&query=${query}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      }),
    };

    return this.http.get<Patient[]>(endpoint, httpOptions)
      .pipe(map((resp: any) => resp.data.map((patient: any) => Patient.buildFromObject(patient))));
  }

  getPatientRecords(): Observable<Record[]> {
    const endpoint = `${this.API_EHR}/atendimentos?idEmpresa=-1&idStatus=1&$include=atendimentoComplemento&idPaciente=${this.pacientId}&semPaginacao=true`; //&$sort=-dataAtendimento

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      }),
    };

    return this.http.get<Record[]>(endpoint, httpOptions)
      .pipe(
        map((resp: any) => {
          const sortedList = resp.data.sort((a: Record, b: Record) => b.id - a.id);
          return sortedList.map((record: any) => Record.buildFromObject(record))
        })
      );
  }

  getPatientRecordById(id: string): Observable<Record> {
    const endpoint = `${this.API_EHR}/atendimentos/${id}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      }),
    };

    return this.http.get<Record>(endpoint, httpOptions)
      .pipe(
        map((resp: any) => Record.buildFromObject(resp.data))
      );
  }

  getPatientDetailsById(patientId: number): Observable<HealthInsurance> {
    const endpoint = `${this.API_CW}/pacientes/${patientId}/pre-atendimento/-1`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      }),
    };

    return this.http.get<HealthInsurance>(endpoint, httpOptions)
      .pipe(map((resp: any) => HealthInsurance.buildFromObject(resp.data.Usuario)));
  }

  getPatientUserById(patientId: number): Observable<Patient> {
    const endpoint = `${this.API_CW}/pacientes/${patientId}/pre-atendimento/-1`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      }),
    };

    return this.http.get<Patient>(endpoint, httpOptions)
      .pipe(map((resp: any) => resp.data.Usuario));
  }

  getStories(patientId: number, empresaId: number): Observable<Story[]> {
    const endpoint = `${this.API_CW}/pacientes/${patientId}/historias/${empresaId}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      }),
    };

    return this.http.get<Story[]>(endpoint, httpOptions)
      .pipe(map((resp: any) => resp.data.map((story: any) => Story.buildFromObject(story))));
  }
}
