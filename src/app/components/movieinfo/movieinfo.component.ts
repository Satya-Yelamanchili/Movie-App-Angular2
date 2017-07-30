import { Component, OnInit, Sanitizer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MdDialog } from '@angular/material';

import { VideodialogComponent } from '../videodialog/videodialog.component';
import { MoviesService } from '../../services/movies.service';
import { MovieInfo } from '../../models/movieinfo';
import { Video } from '../../models/video';
import { Crew } from '../../models/crew';
import { Keyword } from '../../models/keyword';

@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.css']
})
export class MovieinfoComponent implements OnInit {
  movieid: number;
  movieInfo: MovieInfo;
  keyWords: Keyword[];
  videos: Video[];
  url: string;
  cast: Crew[];
  crew: Crew[];

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    public dialog: MdDialog) { }

  ngOnInit() {
    this.getMovieId();
    this.getMovieDetails();
    this.getMovieVideos();
    this.getMovieCastCrew();
    this.getMovieKeyWords();
  }

  getMovieId() {
    this.route.params.subscribe(param => {
      this.movieid = param['id'];
    });
  }

  getMovieDetails() {
    return this.movieService.movieDetails(this.movieid)
      .subscribe(movieInfo => {
        this.movieInfo = movieInfo;
        console.log(movieInfo);
      });
  }
    openDialog() {
      console.log(this.url);

      this.dialog.open(VideodialogComponent, { width: '80%', height: '90%', data: this.url });
    }

  getMovieVideos() {
    return this.movieService.movieVideos(this.movieid)
      .subscribe(videos => {
        this.videos = videos.results;
        console.log(this.videos);
        if (this.videos.length > 0 && this.videos[0].site.toLowerCase() === 'youtube') {
          this.url = 'https://www.youtube.com/embed/' + this.videos[0].key;
        }
      });
  }

  getSafeUrl(key: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + key);
  }

  getMovieCastCrew() {
    this.movieService.movieCredits(this.movieid).subscribe(movieCrew => {
      this.cast = movieCrew.cast;
      this.crew = movieCrew.crew;
    });
  }

  getMovieKeyWords() {
    this.movieService.movieKeyWords(this.movieid).subscribe(keyWords => {
      this.keyWords = keyWords.keywords;
      console.log(keyWords);
    });
  }
}
