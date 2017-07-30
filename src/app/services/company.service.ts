import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Constants } from '../constants';

@Injectable()
export class CompanyService {
  companyUrl: string;
  constructor(private http: Http) { }

 CompanyDetails(companyid: number) {
    this.companyUrl = Constants.baseApiUrl + Constants.companyIfo.replace('{company_id}', companyid.toString()) + Constants.apiKey;
    return this.http.get(this.companyUrl).map(res => res.json());
  }

   CompanyMovies(companyid: number, pageNumber: number) {
    this.companyUrl = Constants.baseApiUrl + Constants.companyMovies.replace('{company_id}', companyid.toString())
                        + Constants.apiKey + '&page=' + pageNumber;
    return this.http.get(this.companyUrl).map(res => res.json());
  }

}
