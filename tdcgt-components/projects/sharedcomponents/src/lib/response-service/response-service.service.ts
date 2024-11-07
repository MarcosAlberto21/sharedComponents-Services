import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseServiceService {

  constructor() { }

  #lastValue = signal("intial value");

  get lastValue(){
    return this.#lastValue;
  }

  getParam(param:string):string{
    this.lastValue.set(param);
    return `Your para its: ${param}`

  }
}
