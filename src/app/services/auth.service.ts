import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Router } from '@angular/router';
import { UserDataService } from './user-data.service';
import { Firestore } from '@angular/fire/firestore';
import { Location } from '@angular/common';

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
    private userDataService: UserDataService,
    private location:Location
  ) {}

  getIsLoggedIn(): boolean {
    return !!this.fireAuth.currentUser;
  }

  async login(email: string, password: string) {
    try {
      await this.fireAuth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home']); 
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
      this.router.navigate(['/login']); // <-- Make sure this is the correct route
    } catch (err) {
      this.handleError(err);
    }
}
  
  async logout() {
    try {
      await this.fireAuth.signOut(); 
      const user = await this.fireAuth.currentUser;
      if (!user) {
        this.router.navigate(['/logged-out']); // <-- Make sure this is the correct route
      } else {
        console.error('User still authenticated after sign-out.');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }
  
  cancel():void{
   this.router.navigate(['/home']);
    const currentURL = this.router.navigate(['/home']);;
    console.log(currentURL);
    console.log(this.location.back());
  
  }
  handleError(err: any) {
    this.isLoggedIn = true;
    switch (err.code) {
      case 'auth/invalid-email':{
        this.accountMessage = 'Invalid email formatted';
        break;
      }
      case 'auth/wrong password':
      case 'auth/user-not-found': {
        this.accountMessage = 'Wrong email address or password';
        break;
      }
      case 'auth/email-already-in-use': {
        this.accountMessage = 'Email already used';
        break;
      }
      case 'auth/weak-password':{
        this.accountMessage = 'Password should be at least 6 characters'
        break;
      }
      default: {
        this.accountMessage = 'Unexpected error';
        break;
      }
    }
  }
}
