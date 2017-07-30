import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-nowplayingmovies',
  templateUrl: './nowplayingmovies.component.html',
  styleUrls: ['./nowplayingmovies.component.css']
})
export class NowplayingmoviesComponent implements OnInit {

  movies: Movie[];
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
  }

    getNowPlayingMovies(pageNumber: number) {
    this.movieService.nowPlayingMovies(pageNumber).subscribe(res => {
        this.movies = res.results;
      });
  }

}
