import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/entities/country';
import { Tourist } from 'src/app/entities/tourist';
import { LogService } from 'src/app/log.service';
import { TouristService } from 'src/app/services/tourist.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  public loading: boolean = false;
  public country: Country = {} as Country;
  public errorMessage: string | null = null;
  constructor(private tservice: TouristService, private router: Router,private logger: LogService) { }
  ngOnInit(): void {
  }
  //post method for posting data to server using servics ts file
  public postDetails() {
    this.tservice.postCountryData(this.country).subscribe((data: Country) => {
      this.router.navigate(['/country/view-country']).then();
    }, (error) => {
      this.errorMessage = error;
      this.router.navigate(['/country/add-country']).then();
    })
  }
  
  testLog(): void {
    this.logger.log("Test the `log()` Method");
}
}
