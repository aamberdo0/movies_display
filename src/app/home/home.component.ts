import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private auth:AngularFireAuth,private router:Router){}
  ngOnInit(): void {}
  logout(){
    this.auth.signOut().then(()=>
      this.router.navigate(['login'])
    )
  }
}
