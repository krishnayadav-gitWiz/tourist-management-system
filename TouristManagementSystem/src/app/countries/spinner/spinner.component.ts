import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(private logger: LogService) { }

  ngOnInit(): void {
  }
  
  testLog(): void {
    this.logger.log("Test the `log()` Method");
}

}
