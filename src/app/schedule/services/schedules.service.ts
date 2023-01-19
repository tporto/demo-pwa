import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Agendamento } from '../interfaces/Schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private readonly API = environment.clinicweb.api;

  constructor(private http: HttpClient) {
  }

  getSchedules(professionalId: number, companyId: number, startDate: string, endDate: string): Observable<Agendamento[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      }),
    };

    const endpoint = `${this.API}/agendamentos?codProfissionais[]=${professionalId}&codEmpresa=${companyId}&startDate=${startDate}&endDate=${endDate}`;

    return this.http.get<Agendamento[]>(endpoint, httpOptions)
      .pipe(map((resp: any) => resp));
  }
}
