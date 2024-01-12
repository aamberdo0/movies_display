import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { MovieService } from '../services/Movie.service';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  moviesId!: number;
  constructor(
    private authService: AuthService,
    private movieService: MovieService
  ) {}

  get isLoggedIn(): boolean {
    return this.authService.getIsLoggedIn();
  }
  httpClient = inject(HttpClient);
  movieIds: number[] = [];
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    return this.movieService.getUpcoming().subscribe((data: any) => {
      this.data = this.movieService.sortData(data.results);
    });
  }

  fetchCredits(movieId: number) {
    this.movieService.getCredits(movieId).subscribe((credits) => {
      console.log(credits);
    });
  }
}
