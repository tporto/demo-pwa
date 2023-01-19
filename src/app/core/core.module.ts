import { ApiService } from './services/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors';
import { JwtService, UserService, UnitService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    ApiService,
    JwtService,
    UnitService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
  ],
  declarations: []
})
export class CoreModule { }
