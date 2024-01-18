// trending.component.ts

import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { MovieService } from '../services/Movie.service';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  @Output() buttonClicked = new EventEmitter<number>();
  hiddenComponent = true;
  constructor(
    private authService: AuthService,
    private movieService: MovieService,
    private router: Router // Inject the Router
  ) {}

  get isLoggedIn(): boolean {
    return this.authService.getIsLoggedIn();
  }
  httpClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    return this.movieService.getUpcoming().subscribe((data: any) => {
      this.data = this.movieService.sortData(data.results);
    });
  }

  onClicked(id: number) {
    this.hiddenComponent = false;
    this.buttonClicked.emit(id); // Emit the event
    console.log(id);
    this.router.navigate(['/details'], { state: { movieId: id } });
  }
}
