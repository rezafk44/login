import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  constructor() { }

  signup(email: string, password: string) {
    //firebase signup API here
  }
  login() {
    //firebase login API here
    this.isAuthenticated = true;
    console.log(this.isAuthenticated);
  }

  logout() {
    //firebase logout API here
    this.isAuthenticated = false;
    console.log(this.isAuthenticated);
  }
}
