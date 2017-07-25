import { Component, OnInit, Input } from '@angular/core';
import { TvService } from '../../services/tv.service';
import { ActivatedRoute } from '@angular/router';
import { Show } from '../../models/show';
import { Tv } from '../../models/tv';

@Component({
  selector: 'app-showinfo',
  templateUrl: './showinfo.component.html',
  styleUrls: ['./showinfo.component.css']
})
export class ShowinfoComponent implements OnInit {
  showId: number;
  showInfo: Show;
  similarShows: Tv[];
  constructor(private tvService: TvService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.getShowId();
    this.getShowInfo();
    this.getSimilarTVShows();
  }
  getShowId() {
    this.routes.params.subscribe(param => {
      this.showId = param['id'];
    });
  }
  getShowInfo() {
    this.tvService.getShowInfo(this.showId).subscribe(res => {
      this.showInfo = res;
    });
  }

  getSimilarTVShows() {
    this.tvService.getSimilarShows(this.showId).subscribe(res => {
      this.similarShows = res.results;
      console.log(res);
    });
  }
}
