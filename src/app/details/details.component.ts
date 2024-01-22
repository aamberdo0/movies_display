// details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieService } from '../services/Movie.service';
import { MovieDetails } from '../../assets/models/MovieDetails';
import { Actor } from '../../assets/models/actor';
import { Director } from '../../assets/models/director';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  
  currentId!: number;
  movieDetails!: MovieDetails;
  actor!: string[];
  crew!: string[];
  defaultImg : string = "../assets/images/profile.jpeg";
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location:Location,
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
      this.movieDetails = new MovieDetails(
        result.original_title,
        result.overview,
        result.vote_average,
        (this.actor = result.credits.cast.slice(0, 5)),
        (this.crew = result.credits.crew.filter(
          (crewMember: any) => crewMember.job === 'Director'
        )),
        result.poster_path,
        result.genres[0].name,
        result.release_date.split('-')[0],
        result.homepage
      );
    });
  }
  back(){
    this.location.back();
  }
  actorName(arrayName: any[]): Actor[] {
    return arrayName?.map(
      (item) =>
        new Actor(
          item.name,
          item.profile_path ?'https://image.tmdb.org/t/p/w500/' + item.profile_path : this.defaultImg,
          this.replaceWord(item.known_for_department, 'Acting', 'Actor')
        )
    );
  }
  replaceWord(name: string, wordReplace: string, desiredWord: string): string {
    return name.replace(wordReplace, desiredWord);
  }

  director(arrayName: any[]): Director[] {
    return arrayName?.map(
      (item) =>
        new Director(
          item.name,
          item.profile_path ?'https://image.tmdb.org/t/p/w500/' + item.profile_path : this.defaultImg,
          this.replaceWord(item.department, 'Directing', 'Director')
        )
    );
  }
}
