import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/entities/country';
import { LogService } from 'src/app/log.service';
import { TouristService } from 'src/app/services/tourist.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit {
  public searchValue: string = "";
  public loading: boolean = false;
  public country: Country[] = [] as Country[];
  public errorMessage: string | null = null;
  constructor(private tservice: TouristService,private logger: LogService) { }
  ngOnInit(): void {

    this.getAllCountryDataFromRestApi();
  }
  //get all details of country from server using getAllCountryData method from service ts file
  public getAllCountryDataFromRestApi() {
    this.loading = true;
    this.tservice.getAllCountryData()
      .subscribe((data: Country[]) => {
        this.country = data;
        this.loading = false;
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      })
  }
  testLog(): void {
      this.logger.log("Test the `log()` Method");
  }
}
