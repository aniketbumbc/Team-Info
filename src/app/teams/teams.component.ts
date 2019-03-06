import { Component, OnInit } from '@angular/core';
import { Teams } from '../teams';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {


  teams: Teams[];
  constructor(private teamService: TeamService) { }

  getTeams(): void {
    this.teamService.getTeams().subscribe(teams => this.teams = teams);
  }
  add(name:string):void{
    name = name.trim();
    if(!name){
      return;
    }
    this.teamService.addTeam({name} as Teams).
    subscribe(team =>{
      this.teams.push(team);
    });
  }

  delete(team: Teams): void {
    this.teams = this.teams.filter(h => h !== team);
    this.teamService.deleteHero(team).subscribe();
  }

  ngOnInit() {
    this.getTeams();
  }

}
