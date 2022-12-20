import { Component, OnInit } from '@angular/core';
import { Country } from '../../entities/country';
import { Tourist } from '../../entities/tourist';
import { TouristService } from '../../services/tourist.service';

@Component({
  selector: 'app-search-tourist',
  templateUrl: './search-tourist.component.html',
  styleUrls: ['./search-tourist.component.css']
})
export class SearchTouristComponent implements OnInit {
  constructor(private service: TouristService) { }
  //variable decleration field
  tourist: Tourist = new Tourist();
  touristData: any;
  countryData: any;
  ngOnInit(): void {
  }
  //search method forsearching tourist data by id
  search() {
    this.service.getTouristData(this.tourist.id).subscribe(data => {
      this.touristData = data;
      this.service.getCountryData(data).subscribe((data: Country) => {
        this.countryData = data;
      })
    })
  }
}
