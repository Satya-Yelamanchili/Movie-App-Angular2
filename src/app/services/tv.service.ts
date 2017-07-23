import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Constants } from '../constants';

@Injectable()
export class TvService {
  tvUrl: string;

  constructor(private http: Http) { }

  getTvGenres() {
    this.tvUrl = Constants.baseApiUrl + Constants.tvGenres + Constants.apiKey ;
    return this.http.get(this.tvUrl).map(res => res.json());
  }

  searchTvShows(keyWord: string, pageNumber: number) {
    this.tvUrl = Constants.baseApiUrl + Constants.tvSearch + Constants.apiKey + '&query=' + keyWord + '&page=' + pageNumber;
    return this.http.get(this.tvUrl).map(res => res.json());
  }

  getPopularShows(pageNumber: number) {
    this.tvUrl = Constants.baseApiUrl + Constants.popularShows + Constants.apiKey + '&page=' + pageNumber;
    return this.http.get(this.tvUrl).map(res => res.json());
  }

  getTopRatedShows(pageNumber: number) {
    this.tvUrl = Constants.baseApiUrl + Constants.topRatedShows + Constants.apiKey + '&page=' + pageNumber;
    return this.http.get(this.tvUrl).map(res => res.json());
  }

  getShowsOnAir(pageNumber: number) {
    this.tvUrl = Constants.baseApiUrl + Constants.showsOnAir + Constants.apiKey + '&page=' + pageNumber;
    return this.http.get(this.tvUrl).map(res => res.json());
  }

  getTodaysShows(pageNumber: number) {
    this.tvUrl = Constants.baseApiUrl + Constants.todayShows + Constants.apiKey + '&page=' + pageNumber;
    return this.http.get(this.tvUrl).map(res => res.json());
  }
}
