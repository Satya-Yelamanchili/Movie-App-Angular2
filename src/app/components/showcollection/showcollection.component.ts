import { Component, OnInit, Input } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { Genre } from '../../models/genre';
@Component({
  selector: 'app-showcollection',
  templateUrl: './showcollection.component.html',
  styleUrls: ['./showcollection.component.css']
})
export class ShowcollectionComponent implements OnInit {
 @Input() data: string;
tvGenres: Genre[];
showGenre: string[];
  constructor(private genreService: GenreService ) {}

  ngOnInit() {
    this.getGenres();
  }

  getGenreNamebyID(ids: number[]) {
    console.log(ids);
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
