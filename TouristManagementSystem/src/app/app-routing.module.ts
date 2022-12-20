import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchTouristComponent } from './tourists/search-tourist/search-tourist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  //when page will be loaded 1st time then login/home page will be reflected
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  //country module's all componenet will be loaded (for lazy loding)
  {
    path: '',
    loadChildren: () => import('./countries/countries.module').then(x => x.CountriesModule)
  },
  //tourist module's all componenet will be loaded (for lazy loding)

  {
    path: '',
    loadChildren: () => import('./tourists/tourists.module').then(x => x.TouristsModule)
  },
  //search tourist by id
  { path: 'search/:touristId', component: SearchTouristComponent },
  // when by mistake default url will be passed in search par when PageNotFoundComponent will be loaded
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  //autometic imported and exported sction for routing module in NgModule decorator
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
