import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Firestore } from '@angular/fire/firestore';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  valueText:boolean = false;
  accountErrorMessage!:string;

  get email(){
    return this.registerForm.get('email');
  }

  element1 !:HTMLElement;
  passwordElement!:string;
  emailElement!:string;
  passwordInput!:HTMLElement;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required,
        Validators.minLength(6)])
    }) 
    this.element1=document.getElementById('Error')!
  }

  constructor(private fb:FormBuilder,private auth:AngularFireAuth,
    private router:Router,private authService:AuthService,
    private fireStore:Firestore,private userDataService:UserDataService
  ){}
  
  async createUser(){
    const { email, password } = this.registerForm.value;
    if(this.registerForm.value.email===''){
      return ; 
    }
    if(this.registerForm.value.password===''){ 
      return ; 
    }
    try{
      await this.authService.signup(this.registerForm.value.email,
        this.registerForm.value.password);
      

      const userData={
          email:email,
          password:password
      };
      await this.userDataService.saveUser(userData)
      this.element1.innerHTML=this.authService.accountMessage; 
      console.log(this.element1.innerText);

      this.valueText = this.checkText(this.element1.innerText); 
      this.emailElement = '';
      this.passwordElement = '';
      
      if(!this.valueText){
        this.element1.innerHTML = '';
        console.log(this.valueText); 
        this.registerForm.reset();
        this.router.navigate(['/login']); 
      }else{
        
        console.log(this.valueText);
      }
      console.log(this.valueText); 
      
      
      
    }catch(error){
      console.log('Sign up failed',error); 
    }
  }

  checkText(text:any) : boolean{
    if(!text.innerText){
      this.valueText = true; 
    }
    return this.valueText;
  }
}
