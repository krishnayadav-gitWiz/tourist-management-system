import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private logger: LogService) { }

  ngOnInit(): void {
  }
  //displaying all tourist details logger method
  testLogTourist(): void {
    this.logger.log("displaying all tourist details logged successfully");
}
//displaying all country details logger method
testLogCountry(): void {
  this.logger.log("displaying all country details logged successfully");
}
}
