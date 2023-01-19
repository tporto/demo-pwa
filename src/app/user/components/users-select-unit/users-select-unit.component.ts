import { PatientService } from 'src/app/patient/patient.service';
import { JwtService } from './../../../core/services/jwt.service';
import { UserHomeService } from './../../services/user-home.service';
import { User } from './../../../core/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/core/models/unit.model';
import { UnitService } from 'src/app/core/services/unit.service';
import { catchError, of, take } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-select-unit',
  templateUrl: './users-select-unit.component.html',
  styleUrls: ['./users-select-unit.component.scss'],
})
export class UsersSelectUnitComponent implements OnInit {
  units: Unit[] = [];
  currentUser!: User | null;
  principalUnitID: number = -1;

  constructor(
    private unitService: UnitService,
    private jwtService: JwtService,
    private patientService: PatientService,
    private _snackBar: MatSnackBar
  ) {
    this.currentUser = this.jwtService.getUser();

    if (this.currentUser) {
      this.unitService.list(this.currentUser)
        .pipe(
          catchError(error => {
            console.log(error)
            this.onError('Erro ao carregar unidades')

            return of([])
          }),
        )
        .subscribe(units => {
          this.units = units

          this.principalUnitID = this.unitService.getPrincipalUnitID(units)
          this.patientService.selectEmpresa(this.principalUnitID)
        })
    }
  }

  ngOnInit(): void {
  }

  onSelectedUnit(value: number) {
    UserHomeService.selectedCodEmpresa.emit(value)

    this.patientService.selectEmpresa(value)
  }

  getSelectedUnit() {
    return this.principalUnitID;
  }

  onError(errorMsg: string) {
    this._snackBar.open(errorMsg, 'Error', {
      duration: 4000,
    });
  }
}
