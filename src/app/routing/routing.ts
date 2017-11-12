import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './../search/search.component';
import { CountryComponent } from './../country/country.component';
const routes: Routes = [
  { path: '', component: SearchComponent}, 
  { path: "country/:id", component: CountryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting { }

export const routedComponents = [AppRouting];