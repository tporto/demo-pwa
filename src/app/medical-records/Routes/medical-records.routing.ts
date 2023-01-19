import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecordsComponent, RecordComponent } from '../Views';

const routes: Routes = [
  {
    path: 'medical-records',
    component: RecordsComponent
  },
  {
    path: 'medical-record',
    component: RecordComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MedicalRecordsRoutingModule { }
