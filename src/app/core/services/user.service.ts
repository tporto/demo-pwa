import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService
  ) { }

  purgeAuth() {
    this.jwtService.destroy();
  }

  attemptAuth(type: String, credentials: any): Observable<User> {
    const route = type === 'login' ? '/login' : '';

    return this.apiService.post('/auth' + route, credentials).pipe(
      map((data) => {
        return data;
      })
    );
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  update(user: User): Observable<User> {
    return this.apiService.put('/user', { user }).pipe(
      map((data) => {
        this.currentUserSubject.next(data.user);
        return data.user;
      })
    );
  }
}
