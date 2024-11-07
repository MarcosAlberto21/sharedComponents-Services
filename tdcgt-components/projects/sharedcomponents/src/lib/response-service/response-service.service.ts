import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseServiceService {

  constructor() { }

  getParam(param:string):string{
    return `Your para its: ${param}`
    
  }
}
