import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService} from '../../services/company.service';
import { Movie } from '../../models/movie'; 

@Component({
  selector: 'app-companyinfo',
  templateUrl: './companyinfo.component.html',
  styleUrls: ['./companyinfo.component.css']
})
export class CompanyinfoComponent implements OnInit {
  companyId: number;
  movies: Movie[];
  constructor(private route: ActivatedRoute, private companyService:CompanyService) { }

  ngOnInit() {
    this.getCompanyId();
    this.getCompanyDetails();
    this.getCompanyMovies(1);
  }
  getCompanyId() {
    this.route.params.subscribe(param => {
      this.companyId = param['id'];
    });
  }
  getCompanyDetails() {
    this.companyService.CompanyDetails(this.companyId).subscribe(detail => {
      console.log(detail);
    });
  }

  getCompanyMovies(pageNumber: number) {
    this.companyService.CompanyMovies(this.companyId, pageNumber).subscribe( movies => {
      this.movies = movies.results;
    });
  }
}
