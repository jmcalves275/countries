import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CountryComponent implements OnInit {
  countryName;
  country = {};
  languages = '';
  currencies = '';

  constructor(private posts: PostsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.countryName = params["id"]);
    this.posts.getCountry(this.countryName).subscribe((data) => {
      this.country = data;

      for(var language of data.languages){
        this.languages += language.name + ', ';
      }

      for(var currency of data.currencies){
        this.currencies += currency.name + ', ';
      }

      this.currencies = this.currencies.slice(0, -2);
      this.languages = this.languages.slice(0, -2);
    })
  }

}
