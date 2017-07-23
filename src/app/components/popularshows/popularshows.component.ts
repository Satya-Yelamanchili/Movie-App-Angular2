import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TvService } from '../../services/tv.service';
import { Tv } from '../../models/tv';

@Component({
  selector: 'app-popularshows',
  templateUrl: './popularshows.component.html',
  styleUrls: ['./popularshows.component.css']
})
export class PopularshowsComponent implements OnInit {

  shows: Tv[];
  constructor(private tvService: TvService) { }

  ngOnInit() {
    this.getPopularTvShows(1);
  }

  getPopularTvShows(pageNumber: number) {
    this.tvService.getPopularShows(pageNumber).subscribe(movies => {
        this.shows = movies.results;
      },
      err => {
        console.log(err);
        return false;
      });
  }

}
