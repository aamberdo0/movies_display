import { Injectable } from '@angular/core';
import { Genre } from '../../assets/models/Genre';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { SearchResult } from '../../assets/models/SearchResult';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = 'api_key=63506cf6a714e38660dff923639d48ae';
  private apiSeach = 'https://api.themoviedb.org/3/';
  private fetchData = 'https://api.themoviedb.org/3/trending/movie/day?';
  private creditsAPI = 'https://api.themoviedb.org/3/movie/';
  private languageURL = '?language=en-US&page=1';

  moviesId!: number;
  credit: any[] = [];

  constructor(private http: HttpClient) {}

  getSearch(searchValue: string): Observable<SearchResult[]> {
    return this.http.get<SearchResult[]>(
      `${this.apiSeach}movie/upcoming${this.languageURL}&${this.apiKey}`
    );
  }

  sortData(movies: any[]): any[] {
    return movies.sort((a, b) => {
      const dateA = new Date(a.release_date).getTime();
      const dateB = new Date(b.release_date).getTime();
      const dateC = new Date(a.release_date);
      return dateB - dateA;
    });
  }
  getMovieIds(): Observable<number[]> {
    return this.getTrending().pipe(
      map((data: any) => {
        const sortedData = this.sortData(data.results);
        const movieIds: number[] = sortedData.map((movie: any) => movie.id);
        return movieIds;
      })
    );
  }

  getCredits(movieIds: number): Observable<any> {
    const creditsURL = `https://api.themoviedb.org/3/movie/${movieIds}?${this.apiKey}`+
    `&language=en-US&append_to_response=credits`;
    return this.http.get<any>(creditsURL);
  }

  getTrending(): Observable<any> {
    return this.http.get<Genre[]>(
      `${this.apiSeach}movie/upcoming` + `${this.languageURL}&${this.apiKey}`
    );
  }

  getUpcoming(): Observable<any> {
    return this.http.get<Genre[]>(
      `${this.fetchData}` + `&${this.apiKey}&language=en-US&page=1`
    );
  }

  getMonthName(movies: any[]): any[] {
    return movies.map(function (value) {
      const data = value;
      const dateC = new Date(data.release_date);
      const month = dateC.toLocaleString('default', { month: 'long' });
      console.log(month);
    });
  }
}
