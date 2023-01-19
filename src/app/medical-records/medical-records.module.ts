import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material.module';

import { RecordsComponent, RecordComponent } from './Views';

import { ListRecordsComponent } from './Components/list-records/list-records.component';
import { ListRecordsItemComponent } from './Components/list-records-item/list-records-item.component';

import { MedicalRecordsRoutingModule } from './Routes/medical-records.routing';
import { HttpClientModule } from '@angular/common/http';
import { MedicalRecordsService } from './Services/medical-records.service';

@NgModule({
  declarations: [
    RecordsComponent,
    RecordComponent,
    ListRecordsComponent,
    ListRecordsItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    MedicalRecordsRoutingModule
  ],
  exports: [
    RecordsComponent,
    RecordComponent
  ],
  providers: [
    MedicalRecordsService,
  ]
})

export class MedicalRecordsModule { }
