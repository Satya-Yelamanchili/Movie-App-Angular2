import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-nowplayingmovies',
  templateUrl: './nowplayingmovies.component.html',
  styleUrls: ['./nowplayingmovies.component.css']
})
export class NowplayingmoviesComponent implements OnInit {

  movies: Movie[];
  constructor() { }

  ngOnInit() {
  }

}
