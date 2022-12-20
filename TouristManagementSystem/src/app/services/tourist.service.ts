import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Country } from '../entities/country';
import { Tourist } from '../entities/tourist';

@Injectable({
  providedIn: 'root'
})
export class TouristService {
  //using java restfull api
  // public url: string = `http://localhost:8080`; 

  //using json server
  public url: string = `http://localhost:4040`;

  //Using >.Net Restful API
  // private url: string = `https://localhost:44362/api`;

  // HttpClient can be used to send requests and retrieve their responses
  constructor(private http: HttpClient) { }

  ///..............rest api for tourist................../////
  //get all data
  public getAllTouristData(): Observable<Tourist[]> {
    let dataUrl: string = `${this.url}/tourist`;
    return this.http.get<Tourist[]>(dataUrl).pipe(catchError(this.handlerError));
  }
  //get single data
  public getTouristData(touristId: string): Observable<Tourist> {
    let dataUrl: string = `${this.url}/tourist/${touristId}`;
    return this.http.get<Tourist>(dataUrl).pipe(catchError(this.handlerError));
  }
  //post data
  public postTouristData(tourist: Tourist): Observable<Tourist> {
    let dataUrl: string = `${this.url}/tourist`;
    return this.http.post<Tourist>(dataUrl, tourist).pipe(catchError(this.handlerError));
  }

  //update data
  public editTouristData(tourist: Tourist, touristId: string): Observable<Tourist> {
    let dataUrl: string = `${this.url}/tourist/${touristId}`;
    return this.http.put<Tourist>(dataUrl, tourist).pipe(catchError(this.handlerError));
  }

  //delete data
  public deleteTouristData(touristId: string) {
    let dataUrl: string = `${this.url}/tourist/${touristId}`;
    return this.http.delete(dataUrl).pipe(catchError(this.handlerError));
  }


  ///..............rest api for country................//////////
  //get all data
  public getAllCountryData(): Observable<Country[]> {
    let dataUrl: string = `${this.url}/country`;
    return this.http.get<Country[]>(dataUrl).pipe(catchError(this.handlerError));
  }
  //get single data
  public getCountryData(tourist: Tourist): Observable<Country> {
    let dataUrl: string = `${this.url}/country/${tourist.countryId}`;
    return this.http.get<Country>(dataUrl).pipe(catchError(this.handlerError));
  }
  //post data
  public postCountryData(country: Country): Observable<Country> {
    let dataUrl: string = `${this.url}/country`;
    return this.http.post<Country>(dataUrl, country).pipe(catchError(this.handlerError));
  }


  ///..............for handing all type of error(client + server)
  //error message
  public handlerError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      //client error
      errorMessage = `Error :${error.error.message}`
    } else {
      //serever side error
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
