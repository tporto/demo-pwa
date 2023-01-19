import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserHomeService {
  static selectedCodEmpresa = new EventEmitter<number>();
  static selectedHomeToogle = new EventEmitter<string>();

  constructor() {}
}
