import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css'],
  
})
export class LogOutComponent implements OnInit {
  constructor(private auth: AngularFireAuth, 
    private router: Router, private location: Location,
    private authService:AuthService) {
    
  }
  ngOnInit(): void {}
  async logout() {
    this.authService.logout();
  }
  cancel() {
   this.router.navigate(['/upcoming']);
   console.log(this.router.navigate(['/upcoming']));
    console.log(this.location.back());
  }
}