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
}
