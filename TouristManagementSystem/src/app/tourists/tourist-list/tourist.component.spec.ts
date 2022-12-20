import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { AddCountryComponent } from 'src/app/countries/add-country/add-country.component';
import { Tourist } from 'src/app/entities/tourist';
import { TouristService } from 'src/app/services/tourist.service';

import { TouristComponent } from './tourist.component';


describe('TouristComponent', () => {
  let component: TouristComponent;
  let service: TouristService;
  let spy: any;

  beforeEach(() => { 
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TouristService]
    });
    let httpMock:HttpClient
    service = new TouristService(httpMock);
    component = new TouristComponent(service);
  });

  afterEach(() => { 
    service = null;
    component = null;
  });


  it('should have called deleteTouristData method of service when we call deleteData method of component', () => {
    spyOn(service, 'deleteTouristData').and.returnValue(of()); 
    
    component.deleteData("1");

    expect(service.deleteTouristData).toHaveBeenCalled(); 
  });

  it('should have called getAllTouristData method of service when we call getAll.... method of component', () => {
     spyOn(service, 'getAllTouristData').and.returnValue(of());
     
      expect(component.loading).toBeFalse();
      component.getAllTouristDataFromRestApi();
      expect(component.loading).toBeTrue();

     
    expect(service.getAllTouristData).toHaveBeenCalled(); 
  });
});