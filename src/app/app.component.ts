
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title='moviesSketch';
  constructor(private router: Router) {}

  showMainNav(): boolean {
    const route = this.router.url.split('/')[1]; // Get the first segment of the route
    return [ 'search', 'main'].includes(route);
  }
  
}

