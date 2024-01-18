// details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/Movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  currentId!: number;
  description!: string;
  title!: string;
  rating!: number;
  cast!: any;
  crew!: any;
  picture!: string;
  genre!: string;
  year!: string;
  imgActor!: string;
  directorName!: string;
  directorRole!: string;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.passRoute();
    this.fetchCredits(this.currentId);
  }

  passRoute() {
    this.route.params.subscribe((params) => {
      this.currentId = +params['id'];
    });
  }
  fetchCredits(movieId: number) {
    this.movieService.getCredits(movieId).subscribe((result) => {
      console.log(result);
      this.title = result.original_title;
      this.description = result.overview;
      this.rating = result.vote_average;
      this.cast = result.credits.cast.slice(0, 5);
      this.crew = result.credits.crew.filter(
        (crewMember: any) => crewMember.job === 'Director'
      );
      this.picture = result.poster_path;

      this.year = result.release_date.split('-')[0];
      this.genre = result.genres[0].name;
      console.log(this.year);
    });
  }
  actorName(
    arrayName: any[]
  ): { name: string; profile: string; role: string }[] {
    return arrayName?.map((item) => ({
      name: item.name,
      profile: item.profile_path,
      role: this.replaceWord(item.known_for_department, 'Acting', 'Actor'),
    }));
  }
  replaceWord(name: string, wordReplace: string, desiredWord: string): string {
    return name.replace(wordReplace, desiredWord);
  }

  director(
    arrayName: any[]
  ): { name: string; profile: string; role: string }[] {
    return arrayName?.map((item) => ({
      name: item.name,
      profile: item.profile_path,
      role: item.job,
    }));
  }
}
