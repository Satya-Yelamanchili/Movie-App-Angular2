import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Genre } from '../models/genre';
import { Constants } from '../constants';

@Injectable()
export class GenreService {
  genreUrl: string;
  tvUrl: string;

  constructor(private http: Http) { }

  getGenre() {
    this.genreUrl = Constants.baseApiUrl + Constants.genre + Constants.apiKey;
    return this.http.get(this.genreUrl).map(res => res.json());
  }
  getTvGenres() {
    this.tvUrl = Constants.baseApiUrl + Constants.tvGenres + Constants.apiKey;
    return this.http.get(this.tvUrl).map(res => res.json());
  }
getShowInfo(showId: number) {
    this.tvUrl = Constants.baseApiUrl + Constants.showInfo.replace('{tv_id}', showId.toString()) + Constants.apiKey;
    return this.http.get(this.tvUrl).map(res => res.json());
  }
}
