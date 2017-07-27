import { DatePipe} from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { Genre } from '../../models/genre';
import { Tv } from '../../models/tv';
@Component({
  selector: 'app-showcollection',
  templateUrl: './showcollection.component.html',
  styleUrls: ['./showcollection.component.css']
})
export class ShowcollectionComponent implements OnInit {
 @Input() data: Tv[];
tvGenres: Genre[];
selectedValue: number;
showGenre: string[];
show: string;
  constructor(private genreService: GenreService ) {}

  ngOnInit() {
    if (localStorage.getItem('tvViewSelection') !== null) {
      this.selectedValue = parseInt(localStorage.getItem('tvViewSelection'), 10);
    } else {
      this.selectedValue = 1;
    }
    this.getGenres();
  }
  onChange(selectedValue: number) {
    localStorage.setItem('tvViewSelection', selectedValue.toString());
  }

  getGenreNamebyID(ids: number[]) {
    this.showGenre = [];
    ids.forEach((x) => {
      if (this.tvGenres !== undefined && this.tvGenres.find((res) => res.id === x) !== undefined) {
        this.showGenre.push(this.tvGenres.find((res) => res.id === x).name);
      }
    });
    return this.showGenre;
  }
  getGenres() {
    this.genreService.getTvGenres().subscribe(genres => {
      this.tvGenres = genres.genres;
    },
      err => {
        console.log(err);
        return false;
      });
  }

}
