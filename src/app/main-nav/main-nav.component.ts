import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
 
  private breakpointObserver = inject(BreakpointObserver);
  path='';
  ngOnInit(): void {
      
  }
  constructor(private authService: AuthService,
    private auth: AngularFireAuth,
    private location:Location,
    private router:Router) {}

  get isLoggedIn(): boolean {
    return this.authService.getIsLoggedIn();
  }
 
  async logout() {
  try {
    const user = await this.auth.currentUser;
    if (user) {
      await this.auth.signOut();
      this.location.replaceState('/logout');
      window.location.reload();
    } else {
      console.error('User not authenticated.');
    }
  } catch (error) {
    console.error('Error during logout:', error);
  }
}


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
