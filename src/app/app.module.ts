import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PostsService } from './posts.service';
import { AppRouting } from './routing/routing';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { SearchComponent } from './search/search.component';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouting,
    NguiAutoCompleteModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
