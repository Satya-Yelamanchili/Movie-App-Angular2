import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TvService } from '../../services/tv.service';
import { Tv } from '../../models/tv';

@Component({
  selector: 'app-onairshows',
  templateUrl: './onairshows.component.html',
  styleUrls: ['./onairshows.component.css']
})
export class OnairshowsComponent implements OnInit {

  shows: Tv[];

  constructor(private tvService: TvService) { }

  ngOnInit() {
    this.getOnAirTvShows(1);
  }

  getOnAirTvShows(pageNumber: number) {
    this.tvService.getShowsOnAir(pageNumber).subscribe(movies => {
        this.shows = movies.results;
      },
      err => {
        console.log(err);
        return false;
      });
  }

}
