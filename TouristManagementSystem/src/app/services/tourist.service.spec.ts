import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TouristService } from './tourist.service';
import { Tourist } from '../entities/tourist';
import { Country } from '../entities/country';

describe('TouristService', () => {
  let service: TouristService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TouristService]
    });
    service = TestBed.inject(TouristService);
    httpMock = TestBed.inject(HttpTestingController)
  });


  //Testing getAllCountryData of service
  it('should get all Country', () => {
    const mockUsers = [
      { id: '1', countryName: "India" },
      { id: '2', countryName: "Russia" }
    ];

    service.getAllCountryData().subscribe(data => {
      expect(service.getAllCountryData).toHaveBeenCalled();
      return expect(data).toEqual(mockUsers);

    })
    const mockReq = httpMock.expectOne(service.url + '/country');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.method).toBe('GET');
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(mockUsers);

    httpMock.verify();
  });


  //Testing postCountryData method of service  
  it('should add a Country', () => {

    const mockCountry: Country = {
      id: '', countryName: "India"
    }

    service.postCountryData(mockCountry).subscribe(data => {
      //expect(data.countryName).toEqual("Russia");
      expect(data.countryName).toEqual("India");
    });
    const mockReq = httpMock.expectOne(service.url + '/country');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.method).toBe('POST');
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(mockCountry);

    httpMock.verify();
  });



  //Testing getAllTouristData method of service
  it('should get all tourists', () => {
    const mockUsers = [
      { id: '1', firstName: "India", lastName: "", contactNo: 3432, dateOfArrival: "2019-01-16", countryName: "udgdgd", countryId: '111', checked: true },

    ];

    service.getAllTouristData().subscribe(data => {
      expect(data).toEqual(mockUsers);
    })
    const mockReq = httpMock.expectOne(service.url + '/tourist');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.method).toBe('GET');
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(mockUsers);

    httpMock.verify();
  });


  //Testing getTouristData method of service
  it('should get one tourists', () => {

    service.getTouristData('1').subscribe(data => {
      expect(data.firstName).toEqual("Nilesh");
      expect(data.contactNo).toEqual(7567899876)
    });
    const mockReq = httpMock.expectOne(service.url + '/tourist/1');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.method).toBe('GET');
    expect(mockReq.request.responseType).toEqual('json');
    // mockReq.flush(mockUsers);

    httpMock.verify();
  });

  //Testing editTouristData method of service
  it('should upate a tourist', () => {

    const mockTourist: Tourist = {
      id: '', firstName: "Nilesh", lastName: "k", contactNo: 3432, dateOfArrival: "2019-01-16", countryId: '111', checked: true

    }

    const updatedTourist: Tourist = {
      id: '2', firstName: "Krishna", lastName: "y", contactNo: 3432, dateOfArrival: "2019-01-16", countryId: '111', checked: true

    }

    service.editTouristData(mockTourist, '2').subscribe(data => {
      expect(data).toEqual(updatedTourist);
    });
    const mockReq = httpMock.expectOne(service.url + '/tourist/2');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.method).toBe('PUT');
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(updatedTourist);

    httpMock.verify();
  });


  //Testing postTouristData method of service
  it('should add a tourist', () => {

    const mockTourist: Tourist = {
      id: '', firstName: "Nilesh", lastName: "k", contactNo: 3432, dateOfArrival: "2019-01-16", countryId: '111', checked: true

    }

    service.postTouristData(mockTourist).subscribe(data => {
      expect(data.firstName).toEqual("Nilesh");
    });
    const mockReq = httpMock.expectOne(service.url + '/tourist');
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.method).toBe('POST');
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(mockTourist);

    httpMock.verify();
  });



  //Testing deleteTouristData method of service
  it('Should Delete Tourist', () => {
    service.deleteTouristData("1").subscribe(data => {
      expect(data).toEqual("1");
    });
    const mockReq = httpMock.expectOne(service.url + '/tourist/1');
    expect(mockReq.request.method).toBe('DELETE');
    expect(mockReq.cancelled).toBeFalsy();
    // mockReq.flush(mockUsers);
    httpMock.verify();
  });

});
