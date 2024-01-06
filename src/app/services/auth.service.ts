import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Router } from '@angular/router';
import { UserDataService } from './user-data.service';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: boolean = false;
  accountMessage!: string;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private fireStore: Firestore,
    private userDataService: UserDataService
  ) {}

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  async login(email: string, password: string) {
    try {
      await this.fireAuth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('token', 'true');
      this.router.navigate(['']);
    } catch (err) {
      this.handleError(err);
    }
  }

  async signup(email: string, password: string) {
    try {
      await this.fireAuth.createUserWithEmailAndPassword(email, password);
      const userData = {
        email: email,
        password: password,
      };
      await this.userDataService.saveUser(userData);
      this.isLoggedIn = true;
      this.router.navigate(['/login']);
    } catch (err) {
      this.handleError(err);
    }
  }
  logout() {
    this.isLoggedIn = false;
    this.fireAuth.signOut().then(() => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  handleError(err: any) {
    this.isLoggedIn = true;
    switch (err.code) {
      case 'auth/invalid-email':
      case 'auth/wrong password':
      case 'auth/user-not-found': {
        this.accountMessage = 'Wrong email address or password';
        break;
      }
      case 'auth/email-already-in-use': {
        this.accountMessage = 'Email already used';
        break;
      }
      default: {
        this.accountMessage = 'Unexpected error';
        break;
      }
    }
  }
}
