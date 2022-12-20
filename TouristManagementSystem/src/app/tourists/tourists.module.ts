import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TouristComponent } from './tourist-list/tourist.component';
import { AddComponent } from './add-tourist/add.component';
import { EditComponent } from './edit-tourist/edit.component';
import { ViewComponent } from './view-tourist/view.component';
import { SearchTouristComponent } from './search-tourist/search-tourist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SpinnerComponent } from '../tourists/spinner/spinner.component';


const routes: Routes = [
  {path:'',children:[

  //1st page redirect to TouristComponent (see all tourist data)
  { path: 'tourist/admin', component: TouristComponent },
  //when we click add tourist button to add more tourist data then AddComponent will be loaded
  { path: 'tourist/add', component: AddComponent },
  //when we click update tourist button to edit tourist data then EditComponent will be loaded
  { path: 'tourist/edit/:touristId', component: EditComponent },
  //when we click view one tourist button to see perticuler tourist data then ViewComponent will be loaded
  { path: 'tourist/view/:touristId', component: ViewComponent },
  ]}
];


@NgModule({
  declarations: [
    
    TouristComponent,
    AddComponent,
    EditComponent,
    ViewComponent,
    SearchTouristComponent,
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
export class TouristsModule { 
  constructor(){
    console.log("tourist module loaded......")
  }
 }
