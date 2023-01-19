import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientHistoryComponent } from './views/patient-history/patient-history.component';
import { PatientRecordsComponent } from './views/patient-records/patient-records.component';

const routes: Routes = [
  {
    path: ':patientId/history',
    component: PatientHistoryComponent
  },
  {
    path: ':patientId/records/:recordId',
    component: PatientRecordsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
