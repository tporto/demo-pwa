import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  private formatErrors(error: any) {
    return throwError(() => error);
  }

  /**
   * TODO apontar para o EHR API
   */
  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.clinicweb.api}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.clinicweb.api}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.clinicweb.api}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(
      `${environment.clinicweb.api}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}
