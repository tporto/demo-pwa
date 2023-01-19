import { PatientService } from 'src/app/patient/patient.service';
import { JwtService } from './../../../core/services/jwt.service';
import { Agendamento } from './../../../schedule/interfaces/Schedule';
import { UserHomeService } from './../../services/user-home.service';
import { User } from './../../../core/models/user.model';
import { ScheduleService } from './../../../schedule/services/schedules.service';
import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  currentUser!: User | null;
  schedules: Agendamento[] = [];
  selectedCodEmpresa: number = 0;
  selectedToogle: string = "1";

  constructor(
    private scheduleService: ScheduleService,
    private patientService: PatientService,
    public jwtService: JwtService)
  {
    this.currentUser = this.jwtService.getUser();
    this.fetchSchedules();
  }

  ngOnInit(): void {
    UserHomeService.selectedHomeToogle.subscribe(value => this.selectedToogle = value)
  }

  fetchSchedules(date?: string) {
    let startAndEndDate = ''

    if (date) {
      startAndEndDate = dayjs(date).format('YYYY-MM-DD');
    } else {
      startAndEndDate = dayjs(new Date()).format('YYYY-MM-DD');
    }

    const userId = this.currentUser?.idUsuario || 0;
    this.patientService.getEmpresa().subscribe((value) => this.selectedCodEmpresa = value ?? 0);

    this.scheduleService.getSchedules(userId, this.selectedCodEmpresa, startAndEndDate, startAndEndDate)
      .subscribe((res: any) => {
        this.schedules = res.data;
      });
  }
}
