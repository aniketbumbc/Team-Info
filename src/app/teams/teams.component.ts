import { Component, OnInit } from '@angular/core';
import {Teams} from  '../teams';
import {TEAMS} from '../mock-teams';
import {TeamService} from '../team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {


 teams:Teams[];

selectedTeams: Teams;

onSelect(team:Teams):void{
  this.selectedTeams = team;
}


  constructor(private teamService: TeamService) {}

  getTeams():void{
    this.teamService.getTeams().subscribe(teams => this.teams = teams);
  }

  ngOnInit() {
    this.getTeams();
  }

}
