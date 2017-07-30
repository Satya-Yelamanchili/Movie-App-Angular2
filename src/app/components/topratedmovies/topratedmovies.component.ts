import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-topratedmovies',
  templateUrl: './topratedmovies.component.html',
  styleUrls: ['./topratedmovies.component.css']
})
export class TopratedmoviesComponent implements OnInit {

  movies: Movie[];
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.getTopRatedMovies(1);
  }

  getTopRatedMovies(pageNumber: number) {
    this.movieService.topRatedMovies(pageNumber).subscribe(res => {
        this.movies = res.results;
      });
  }

}
