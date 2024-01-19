import { Director } from "./director";
import { Actor } from "./actor";
export class MovieDetails {
    description!: string;
    title!:string;
    rating!: number;
    cast!: Actor[];
    crew!: Director[];
    picture!: string;
    genre!: string;
    year!: string;
    imgActor!: string;
    directorName!: string;
    directorRole!: string;
    trailer!:string;

    constructor(
        title: string,
        description: string,
        rating: number,
        cast: Actor[],
        crew: Director[],
        picture: string,
        genre: string,
        year: string,
        trailer:string,
      ) {
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.cast = cast;
        this.crew = crew;
        this.picture = picture;
        this.genre = genre;
        this.year = year;
        this.trailer = trailer;
      }
}

