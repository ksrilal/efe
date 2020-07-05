import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  status = false;

  change() {
    console.log("change work");
    this.status = true;
  }

}
