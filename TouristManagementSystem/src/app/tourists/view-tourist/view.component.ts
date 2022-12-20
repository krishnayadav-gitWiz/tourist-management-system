import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from 'src/app/log.service';
import { Country } from '../../entities/country';
import { Tourist } from '../../entities/tourist';
import { TouristService } from '../../services/tourist.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  //variable decleration section
  public touristId: string | null = null;
  public loading: boolean = false;
  public tourist: Tourist = {} as Tourist;
  public errorMessage: string | null = null;
  public country: Country = {} as Country;

  constructor(private activatedRoute: ActivatedRoute,private logger: LogService,
    private tservice: TouristService) { }
  ngOnInit(): void {
    //loading all data from both table country+tourist
    this.activatedRoute.paramMap.subscribe((param) => {
      this.touristId = param.get('touristId')
    });
    if (this.touristId) {
      this.loading = true;
      //data from tourist service
      this.tservice.getTouristData(this.touristId).subscribe((data: Tourist) => {
        this.tourist = data;
        // console.log(this.tourist);

        this.loading = false;
        //data from country service
        this.tservice.getCountryData(data).subscribe((data: Country) => {
          this.country = data;
          // console.(this.country);
        })
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      })
    }
  }
  //for checking is there ant data present in country aaray and tourist array or not if not then display 
  //perticular magaser wich will be assign from server in red bold tex like no data found 400
  // public isDataEmpty() {
  //   return Object.keys(this.tourist).length > 0 && Object.keys(this.country).length > 0;
  // }

  testLog(): void {
    this.logger.log("view one tourist data logged sussufully...");
}
}
