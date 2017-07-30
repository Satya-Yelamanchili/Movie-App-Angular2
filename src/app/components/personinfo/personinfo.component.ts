import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { ActivatedRoute } from '@angular/router';
import { GenreService } from '../../services/genre.service';
import { PersonInfo } from '../../models/personinfo';
import { Movie } from '../../models/movie';
import { ExtraIds } from '../../models/personextraid';

@Component({
  selector: 'app-personinfo',
  templateUrl: './personinfo.component.html',
  styleUrls: ['./personinfo.component.css']
})
export class PersoninfoComponent implements OnInit {

  personId: number;
  personInfo: PersonInfo;
  movieCredit: Movie[];
  movieGenre: string[];
  extraids: ExtraIds;
  constructor(private peopleService: PeopleService, private route: ActivatedRoute, private genreService: GenreService) { }

  ngOnInit() {
    this.getPersonId();
    this.getPersonDetails().subscribe();
    this.getpersonCredits().subscribe();
    this.getPersonExtraIds();
  }

  getPersonId() {
    this.route.params.subscribe(param => {
      this.personId = param['id'];
      localStorage.setItem('personID', this.personId.toString());
    });
  }

  getPersonDetails() {
    return this.peopleService.getpersonInfo(this.personId)
      .map(personinfo => {
        this.personInfo = personinfo;
        console.log(this.personInfo);
      });
  }

  getpersonCredits() {
    return this.peopleService.getpersonCredits(this.personId)
      .map(personCrew => {
        this.movieCredit = personCrew.cast;
      });
  }

  getPersonExtraIds() {
    this.peopleService.getpersonExtraId(this.personId).subscribe(extra => {
      this.extraids = extra;
    });
  }

}
