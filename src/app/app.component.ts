
import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
  title='moviesSketch';
  constructor(private router: Router) {}

  showMainNav(): boolean {
    const route = this.router.url.split('/')[1]; // Get the first segment of the route
    return ['home', 'trending','upcoming','search', 'main'].includes(route);
  }
  
}

