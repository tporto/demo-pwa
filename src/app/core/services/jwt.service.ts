import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable()
export class JwtService {

  getToken(): String {
    return window.localStorage['token'];
  }

  getUser(): User | null {
    const user = window.localStorage['user'];

    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    const token = window.localStorage['token'];

    if (token && !this.tokenExpired(token)) {
      return true;
    }

    return false;
  }

  save(data: any) {
    const token = data.token;
    const decodeToken = this.parseJwt(token);

    window.localStorage['token'] = token;
    window.localStorage['user'] = JSON.stringify(decodeToken.user);
  }

  destroy() {
    window.localStorage.clear();
  }

  private parseJwt(token: String) {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;

    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
}
