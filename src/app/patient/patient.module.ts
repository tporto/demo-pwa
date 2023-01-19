import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { PatientWrapperComponent } from './components/patient-wrapper/patient-wrapper.component';
import { PatientHistoryComponent } from './views/patient-history/patient-history.component';
import { PatientRecordsListComponent } from './components/patient-records-list/patient-records-list.component';
import { PatientRecordItemComponent } from './components/patient-records-list/patient-record-item/patient-record-item.component';
import { PatientRecordsComponent } from './views/patient-records/patient-records.component';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientDetailsSheetComponent } from './components/patient-details-sheet/patient-details-sheet.component';


@NgModule({
  declarations: [
    PatientDetailsComponent,
    PatientWrapperComponent,
    PatientHistoryComponent,
    PatientRecordsListComponent,
    PatientRecordItemComponent,
    PatientRecordsComponent,
    PatientListComponent,
    PatientDetailsSheetComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    PatientRoutingModule,
  ],
  exports: [
    PatientDetailsComponent,
    PatientListComponent
  ]
})
export class PatientModule { }
