import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieService } from '../services/Movie.service';
import { Genre } from '../../assets/models/Genre';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UpcomingComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    private authService: AuthService
  ) {}

  data: any[] = [];
  month: any[] = [];
  movies!: Genre[];
  ngOnInit(): void {
    this.fetchData();
    this.getMonth();
  }

  get isLoggedIn(): boolean {
    console.log(this.authService.getIsLoggedIn());
    return this.authService.getIsLoggedIn();
  }
  fetchData() {
    return this.movieService.getTrending().subscribe((data: any) => {
      this.data = this.movieService.sortData(data.results);
    });
  }

  getMonth() {
    return this.movieService.getTrending().subscribe((data: any) => {
      this.movieService.getMonthName(data.results);
    });
  }
}
