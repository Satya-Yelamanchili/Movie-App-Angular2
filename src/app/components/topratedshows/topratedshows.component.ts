import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TvService } from '../../services/tv.service';
import { Tv } from '../../models/tv';

@Component({
  selector: 'app-topratedshows',
  templateUrl: './topratedshows.component.html',
  styleUrls: ['./topratedshows.component.css']
})
export class TopratedshowsComponent implements OnInit {

  pageNumber: number;
  shows: Tv[];

  constructor(private tvService: TvService) { }

  ngOnInit() {

    if (this.pageNumber > 1) {
      this.pageNumber += 1;
    } else {
        this.pageNumber = 1;
      }
    this.getTopRatedShows(this.pageNumber);
  }

  getTopRatedShows(pageNumber: number) {
    this.tvService.getTopRatedShows(pageNumber).subscribe(movies => {
        this.shows = movies.results;
      },
      err => {
        console.log(err);
        return false;
      });
  }

  firstpage() {
    this.pageNumber = 1;
    this.tvService.getTopRatedShows(1).subscribe(movies => {
        this.shows = movies.results;
      },
      err => {
        console.log(err);
        return false;
      });
  }
  nextpage() {
    this.pageNumber += 1;
    console.log(this.pageNumber);
    this.tvService.getTopRatedShows(this.pageNumber).subscribe(movies => {
        this.shows = movies.results;
      },
      err => {
        console.log(err);
        return false;
      });
  }

}
