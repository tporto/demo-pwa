/** External Modules */
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/** Internal Modules */
import { MaterialModule } from 'src/app/material.module';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

/** Components */
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserHomeComponent } from './views/home/user-home.component';
import { UsersSelectUnitComponent } from './components/users-select-unit/users-select-unit.component';
import { UsersCalendarComponent } from './components/users-calendar/users-calendar.component';
import { CalendarHeader } from './components/users-calendar/header/calendar-header.component';
import { UsersHomeToggleComponent } from './components/users-home-toggle/users-home-toggle.component';
import { ScheduleListComponent } from './../schedule/components/schedule-list/schedule-list.component';
import { PatientModule } from '../patient/patient.module';

@NgModule({
  declarations: [
    UserHomeComponent,
    UserHeaderComponent,
    UsersSelectUnitComponent,
    UsersCalendarComponent,
    CalendarHeader,
    UsersHomeToggleComponent,
    ScheduleListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    UserRoutingModule,
    PatientModule
  ],
})
export class UserModule { }
