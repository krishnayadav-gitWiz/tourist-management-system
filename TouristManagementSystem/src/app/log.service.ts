import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  log(msg: any) {
    console.log(JSON.stringify(msg)+ " : " +new Date() );
  }
}
