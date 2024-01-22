import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavigationEnd, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';
AuthService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private auth: AngularFireAuth, 
    private router: Router, 
    private location: Location,
    private authService: AuthService) {
   
  }
  ngOnInit(): void {
    if (!this.authService.getIsLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

}
