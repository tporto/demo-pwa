import { UserModule } from './user/user.module';
import { MaterialModule } from './material.module';
import { LOCALE_ID, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PatientModule } from './patient/patient.module';

import { MedicalRecordsModule } from './medical-records/medical-records.module';
import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePtBr, 'pt-BR');

@NgModule({
  declarations: [AppComponent],
  imports: [
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    PatientModule,
    UserModule,
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MedicalRecordsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
