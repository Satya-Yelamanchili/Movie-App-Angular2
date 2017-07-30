import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-upcomingmovies',
  templateUrl: './upcomingmovies.component.html',
  styleUrls: ['./upcomingmovies.component.css']
})
export class UpcomingmoviesComponent implements OnInit {

  movies: Movie[];
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.getUpComingMovies(1);
  }

  getUpComingMovies(pageNumber: number) {
    this.movieService.upComingMovies(pageNumber).subscribe(res => {
        this.movies = res.results;
      });
  }

}
