import { Component, OnInit, Input } from '@angular/core';
import {Teams} from '../teams';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TeamService } from '../team.service';



@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  @Input()team:Teams;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location ) { }

  ngOnInit():void {
    this.getTeam();
  }
  getTeam():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(id)
    .subscribe(Teams => this.team = Teams);
  }
  goBack():void{
    this.location.back();
  }
}
