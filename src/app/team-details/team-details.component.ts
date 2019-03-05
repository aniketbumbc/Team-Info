import { Component, OnInit, Input } from '@angular/core';
import {Teams} from '../teams';



@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  @Input()team:Teams;

  constructor() { }

  ngOnInit() {
  }

}
