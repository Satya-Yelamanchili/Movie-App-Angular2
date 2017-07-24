import { Component, OnInit, Input } from '@angular/core';
import { TvService } from '../../services/tv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showinfo',
  templateUrl: './showinfo.component.html',
  styleUrls: ['./showinfo.component.css']
})
export class ShowinfoComponent implements OnInit {
  showId: number;
  constructor(private tvService: TvService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.getShowId();
    this.getShowInfo();
  }
  getShowId() {
    this.routes.params.subscribe(param => {
      this.showId = param['id'];
    });
  }
  getShowInfo() {
    this.tvService.getShowInfo(this.showId).subscribe(res => {
      console.log(res);
    });
  }
}
