import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-out',
  template:`
  <h1>You have successfully logged out</h1>
<mat-spinner mode="indeterminate" > 
</mat-spinner>`,
  styleUrls: ['./logged-out.component.css'],
  imports: [
    MatProgressSpinnerModule
  ],
  standalone:true
})
export class LoggedOutComponent implements OnInit {
  constructor(private router: Router,
    private location:Location) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/login'])
    },1500);
    
  }
}
