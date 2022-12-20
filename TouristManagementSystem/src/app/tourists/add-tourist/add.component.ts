import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogService } from 'src/app/log.service';
import { Country } from '../../entities/country';
import { Tourist } from '../../entities/tourist';
import { TouristService } from '../../services/tourist.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  //touristForm for validation for all required field
  touristForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-z A-Z]*')]],
    lastName: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-z A-Z]*')]],
    contactNo: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    dateOfArrival: ['', Validators.required],
    countryId: ['', Validators.required]

  })
  //variable decleartions field
  public loading: boolean = false;
  public tourist: Tourist = {} as Tourist;
  public country: Country[] = [] as Country[];
  public errorMessage: string | null = null;
  constructor(private tservice: TouristService, private router: Router, private formBuilder: FormBuilder
    ,private logger: LogService) { }
  ngOnInit(): void {
    //load all country data for section tag(drop-down)
    this.tservice.getAllCountryData().subscribe((data: Country[]) => {
      this.country = data;
    }, (error) => {
      this.errorMessage = error;
    })
  }
  //post/create/peatch method for adding data on server side 
  public postDetails() {
    this.tservice.postTouristData(this.tourist).subscribe((data: Tourist) => {
      //if data is posted then return/navigate to privious code
      this.router.navigate(['/tourist/admin']);
    }, (error) => {
      this.errorMessage = error;
      //other wise redirect/navigate to same page
      this.router.navigate(['/tourist/add']);
    })
  }
  
  testLog(): void {
    this.logger.log("add tourist method logged successfully....");
}

}
