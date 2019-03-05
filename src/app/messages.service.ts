import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message:string[] = [];

  add(message:string){
     this.message.push(message);
  }

  clear(){
    this.message = [];
  }
  constructor() { }
}
