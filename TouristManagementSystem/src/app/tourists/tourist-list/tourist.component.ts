import { Component, OnInit } from '@angular/core';
import { Tourist } from '../../entities/tourist';
import { TouristService } from '../../services/tourist.service';
@Component({
  selector: 'app-tourist',
  templateUrl: './tourist.component.html',
  styleUrls: ['./tourist.component.css']
})
export class TouristComponent implements OnInit {
  //variable decleration section
  // msg="";
  // clss="";
  selectedId = [];
  public searchValue: string = "";
  public loading: boolean = false;
  public tourist: Tourist[] = [];
  public errorMessage: string | null = null;
  constructor(private tservice: TouristService
    ) { }
  //1st thing which will be load when this component will be loaded
  ngOnInit(): void {
    this.getAllTouristDataFromRestApi();
  }
  //for for get all data from server/backend
  public getAllTouristDataFromRestApi() {
    this.loading = true;
    this.tservice.getAllTouristData()
      .subscribe((data: Tourist[]) => {
        this.tourist = data;
        this.loading = false;
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      })
  }
  //for deleteting data through button tag (one data will be deteted only)
  public deleteData(touristId: string | undefined) {
    if (touristId) {
      this.tservice.deleteTouristData(touristId)
        .subscribe((data: {}) => {
          this.getAllTouristDataFromRestApi();

        }, (error) => {
          this.errorMessage = error;
          this.loading = false;
        });
    }
  }
  //method for checking ...(to check all checked box)
  checkAllCheckBox(ev: any) {
    // console.log('chall')
    this.tourist.forEach(x => x.checked = ev.target.checked)
  }
  //method for checking... (is all checkbox is checked or not)
  isAllCheckBoxChecked() {
    // console.log('ISall')
    return this.tourist.every(p => p.checked);
  }
  //for deleteting data through checkbox  (multiple data will be deteted )
  deleteTourists(): void {
    this.selectedId = this.tourist.filter(tourist =>
      tourist.checked).map(p => p.id);
    console.log(this.selectedId);
    for (let i = 0; i < this.selectedId.length; i++) {
      this.tservice.deleteTouristData(this.selectedId[i]).subscribe(data => {
        //after deleteting data page will be reload and all data will be displayed 
        this.getAllTouristDataFromRestApi();
      })
    }

  }
 

}
