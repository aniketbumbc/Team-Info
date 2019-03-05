import { Injectable } from '@angular/core';
import { Teams } from "./teams";
import {TEAMS} from './mock-teams';
import { Observable,of } from 'rxjs';
import{MessagesService} from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  getTeams():Observable<Teams[]>{
    this.messageService.add('Team Service: Featched Heroes');
    return of (TEAMS);
  }

  constructor(private messageService: MessagesService) { }
}
