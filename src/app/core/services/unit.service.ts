import { User } from './../models/user.model';
import { first, map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Unit, Vinculo } from './../models/unit.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  private readonly API = environment.clinicweb.api;

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  list(user: User): Observable<Unit[]> {
    const endpoint = `${this.API}/usuarios/${user.idUsuario}/empresas`;

    return this.http.get<Unit[]>(endpoint, this.httpOptions)
      .pipe(
        first(),
        map((resp: any) => resp.data.map((unit: any) => this.buildFromObject(unit)))
      );
  }

  getPrincipalUnitID(units: Unit[]): number {
    const unit = units.find((unit: Unit) => {
      const vinculo = unit.vinculos.find((vinculo: Vinculo) => vinculo.principal === 'S')

      return vinculo ? unit : null
    })

    return unit ? unit.codEmpresa : -1
  }

  private buildFromObject(value: any) {
    return {
      codEmpresa: value['cod_empresa'],
      nomeFantasia: value['nomeFantasia'],
      vinculos: value['Vinculos'] || []
    } as Unit
  }
}
