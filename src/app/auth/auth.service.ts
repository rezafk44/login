import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    //firebase signup API here
    // this.http.post(
    //   `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}}`,
    //   {
    //     email,
    //     password,
    //     returnSecureToken: true
    //   }
    // );
  }

  login(email: string, password: string) {
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
