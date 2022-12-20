import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LogService } from 'src/app/log.service';
import { Country } from '../../entities/country';
import { Tourist } from '../../entities/tourist';
import { TouristService } from '../../services/tourist.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  //variables declerations section
  public loading: boolean = false;
  public touristId: string | null = null;
  public tourist: Tourist = {} as Tourist;
  public errorMessage: string | null = null;
  public country: Country[] = [] as Country[];
  constructor(private activatedRout: ActivatedRoute, private tservice: TouristService,
    private router: Router,private logger: LogService) { }

  ngOnInit(): void {
    //for loading all the data from server
    this.loading = true;
    this.activatedRout.paramMap.subscribe((param: ParamMap) => {
      this.touristId = param.get('touristId');
    });
    if (this.touristId) {
      this.tservice.getTouristData(this.touristId).subscribe((data: Tourist) => {
        this.tourist = data;
        this.loading = false;
        this.tservice.getAllCountryData().subscribe((data: Country[]) => {
          this.country = data;
        })
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      })
    }
  }

//calling upfate method for chnageing in tourist details and country details(countryName)
  public updateTourist() {
    if (this.touristId) {
      //editTouristData this method is present in servicce ts file
      this.tservice.editTouristData(this.tourist, this.touristId).subscribe((data: Tourist) => {
        this.router.navigate(['/tourist/admin']);
      }, (error) => {
        this.errorMessage = error;
        this.router.navigate(['/tourist/edit/${this.touristId}']);
      });
    }
  }
  testLog(): void {
    this.logger.log("update tourist method logged successfully....");
}
}


