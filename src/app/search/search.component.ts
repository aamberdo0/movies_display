import { Component,OnInit } from '@angular/core';
import { MovieService } from '../services/Movie.service';
import { SearchResult } from '../../assets/models/SearchResult';
import { FormBuilder,FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchForm!:FormGroup;
  movies!:SearchResult[]; 
  constructor(private movieService: MovieService,
    private authService:AuthService,
    private fb:FormBuilder){}; 
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchValue:'',
    });
    this.fetchData();
  }
  get isLoggedIn(): boolean {
    return this.authService.getIsLoggedIn();
  }
  fetchData():void{
    const searchValue = this.searchForm.value.searchValue;
    this.movieService.getSearch(searchValue).subscribe((response:any)=>{
        this.movies = response.results; 
        console.log(this.movies);
      }); 
  }
  generateStar(rating:number):string{
    const starCount = Math.round(rating); 
    if (starCount === 0){
      return '';
    }else if(starCount < 4){
      return '★'.repeat(2);
    }else if(starCount > 4 && starCount <=7 ){
      return '★'.repeat(4);
    }
    return '★'.repeat(5);
  }
  onSearchSubmit():void{
    this.fetchData(); 
  }
}
