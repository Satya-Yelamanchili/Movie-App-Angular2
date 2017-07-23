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

  shows: Tv[];
 
  constructor(private tvService: TvService) { }

  ngOnInit() {
    this.getTopRatedShows(1);
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

}
