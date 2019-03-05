import { Component, OnInit } from '@angular/core';
import{TeamService} from '../team.service';
import{MessagesService} from '../messages.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //message:any;

  constructor(public messageService:MessagesService) { 
  //this.message= messageService.message;
  }

  ngOnInit() {
  }

}
