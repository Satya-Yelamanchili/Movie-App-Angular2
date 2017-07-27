import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-topratedmovies',
  templateUrl: './topratedmovies.component.html',
  styleUrls: ['./topratedmovies.component.css']
})
export class TopratedmoviesComponent implements OnInit {

  movies: Movie[];
  constructor() { }

  ngOnInit() {
  }

}
