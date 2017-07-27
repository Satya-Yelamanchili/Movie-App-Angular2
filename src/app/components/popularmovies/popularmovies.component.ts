import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-popularmovies',
  templateUrl: './popularmovies.component.html',
  styleUrls: ['./popularmovies.component.css']
})
export class PopularmoviesComponent implements OnInit {

  movies: Movie[];
  constructor(private movieService: MoviesService) {
  }

  ngOnInit() {
    this.getPopularMovies(1);
  }

  getPopularMovies(pageNumber: number) {
    this.movieService.popularMovies(pageNumber).subscribe(res => {
        this.movies = res.results;
      });
  }
}
