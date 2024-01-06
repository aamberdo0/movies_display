import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {}
  submitForm(form:any):void{
    this.loginForm.reset();
  }
  login(form:FormGroup) {
    if (this.loginForm.value.email === '') {
      return;
    }
    if (this.loginForm.value.password === '') {
    }

    try {
      this.authService.login(
        this.loginForm.value.email,
        this.loginForm.value.password
      ).then(() => {
        this.loginForm.reset();
      });
    } catch (error) {
      console.log('Sign up failed', error);
    }
  }
}