import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap, debounce
} from 'rxjs/operators';
import { Teams } from '../teams';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-search',
  templateUrl: './team-search.component.html',
  styleUrls: ['./team-search.component.css']
})
export class TeamSearchComponent implements OnInit {

  teams$: Observable<Teams[]>;
  private searchTerms = new Subject<string>();


  constructor(private teamService: TeamService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.teams$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.teamService.searchTeam(term)),
    );
  }

}
