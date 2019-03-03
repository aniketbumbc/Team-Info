import { Component, OnInit } from '@angular/core';
import {Teams} from  '../teams';
import {TEAMS} from '../mock-teams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

mockTeams = TEAMS;
selectedTeams: Teams;
onSelect(team:Teams):void{
  this.selectedTeams = team;
}


  constructor() { }

  ngOnInit() {
  }

}
