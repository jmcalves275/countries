import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  public countries = [];
  isValid = false;
  public myForm: FormGroup;

  constructor(private route: ActivatedRoute, private posts: PostsService, private _sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => console.log('teste'));

    this.posts.getListCountries().subscribe((data) => {
      this.countries = data;
      this.isValid = true;
    })
    this.myForm = new FormGroup({
      'country': new FormControl({value: null, disabled: this.isValid}, Validators.required),
    })
  }


  autocompleListFormatter = (data: any) => {
    let html = '<span style="color:#333">' + data.name + '</span>';
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  notFound = () => {
    let html = '<span style="color:#333">Not found</span>';
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
  onSubmit(value: any) {
    if (value.country.name)
      this.router.navigate(['country', value.country.name]);
  }

}
