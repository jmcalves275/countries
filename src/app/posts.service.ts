import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getListCountries() {
    return this.http.get('/rest/countries')
      .map(res => res.json());
  }

  getCountry(countryName) {
    return this.http.get('/rest/country/' + countryName)
      .map(res => res.json());
  }

}
