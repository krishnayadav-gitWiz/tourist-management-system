import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCountryComponent } from './add-country/add-country.component';
import { ViewCountryComponent } from './view-country/view-country.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { RouterModule, Routes } from '@angular/router';
import { SpinnerComponent } from '../countries/spinner/spinner.component';

const routes: Routes = [
{path:'',children:[

  //when we click add country button to add more country data then AddCountryComponent will be loaded
  { path: 'country/add-country', component: AddCountryComponent },
  //when we click view all country button to see perticuler tourist data then ViewCountryComponent will be loaded
  { path: 'country/view-country', component: ViewCountryComponent },
]}
];

@NgModule({
  declarations: [
    AddCountryComponent,
    ViewCountryComponent,
    SearchPipe,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CountriesModule {
  constructor(){
    console.log("country module loaded......")
  }
 }
