import { Injectable } from '@angular/core';
import { Teams } from "./teams";
import {TEAMS} from './mock-teams';
import { Observable,of } from 'rxjs';
import{MessagesService} from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private messageService: MessagesService) { }

  getTeams(): Observable<Teams[]>{
    this.messageService.add('Team Service: Featched Teams featch');
    return of(TEAMS);
  }

  getTeam(id: number):Observable<Teams>{
    this.messageService.add('Team Service: Featched Heroes id = ' +id);
    return of (TEAMS.find(team => team.id === id));
  }


}
