import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TvService } from '../../services/tv.service';
import { Tv } from '../../models/tv';

@Component({
  selector: 'app-todaysshows',
  templateUrl: './todaysshows.component.html',
  styleUrls: ['./todaysshows.component.css']
})
export class TodaysshowsComponent implements OnInit {

  shows: Tv[];
  constructor(private tvService: TvService) { }

  ngOnInit() {
    this.getTodaysShows(1);
  }

  getTodaysShows(pageNumber: number) {
    this.tvService.getTodaysShows(pageNumber).subscribe(movies => {
        this.shows = movies.results;
      },
      err => {
        console.log(err);
        return false;
      });
  }

}
