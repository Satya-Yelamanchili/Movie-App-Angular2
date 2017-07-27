import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { Genre } from '../../models/genre';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-moviecollection',
  templateUrl: './moviecollection.component.html',
  styleUrls: ['./moviecollection.component.css']
})
export class MoviecollectionComponent implements OnInit {
 @Input() data: Movie[];
 selectedValue: number;
 movieGenre: string[];
 allGenres: Genre[];

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    if (localStorage.getItem('movieViewSelection') !== null) {
      this.selectedValue = parseInt(localStorage.getItem('movieViewSelection'), 10);
    } else {
      this.selectedValue = 1;
    }
    this.getGenres();
  }

  onChange(selectedValue: number) {
    localStorage.setItem('movieViewSelection', selectedValue.toString());
  }

    getGenreNamebyID(ids: number[]) {
    this.movieGenre = [];
    ids.forEach((x) => {
      if (this.allGenres.find((res) => res.id === x) !== undefined) {
        this.movieGenre.push(this.allGenres.find((res) => res.id === x).name);
      }
    });
    return this.movieGenre;
  }
  getGenres() {
    this.genreService.getGenre().subscribe(genres => {
      this.allGenres = genres.genres;
    },
      err => {
        console.log(err);
        return false;
      });
  }

}
