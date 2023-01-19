import { CommonModule } from '@angular/common';
import { AlertComponent } from './../alert/alert.component';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    AuthRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    CommonModule
  ],
  declarations: [
    AlertComponent,
    AuthComponent
  ],
  providers: [
    NoAuthGuard
  ]
})
export class AuthModule {}
