import { Injectable } from '@angular/core';
import { Teams } from "./teams";
//import {TEAMS} from './mock-teams';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private messageService: MessagesService, private http: HttpClient) { }

  private teamsUrl = 'api/teams';
  getTeams(): Observable<Teams[]> {
    return this.http.get<Teams[]>(this.teamsUrl).pipe(
      tap(_ => this.log('fetched teams')),
      catchError(this.handleError('getTeams', []))
    );
  }

  getTeam(id: number): Observable<Teams> {
    const url = `${this.teamsUrl}/${id}`;
    return this.http.get<Teams>(url).pipe(
      tap(_ => this.log('fetched hero id' + id)),
      catchError(this.handleError<Teams>('getTeam' + id))
    );
  }

  private log(message: string) {
    this.messageService.add('Team Service ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  updateTeam(teams:Teams):Observable<any>{
    return this.http.put(this.teamsUrl,teams,TeamService.httpOptions).pipe(
      tap(_ => this.log(`updated team id=${teams.id}`)),
      catchError(this.handleError<any>('updateTeam'))

    )
  }
  static  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addTeam(team:Teams):Observable<Teams>{
    return this.http.post<Teams>(this.teamsUrl,team,TeamService.httpOptions)
    .pipe(
      tap((newTeam:Teams)=> this.log (`added hero w/ id=${newTeam.id}`)),
      catchError(this.handleError<Teams>('addTeam'))
  );
}

deleteHero(team:Teams|number):Observable<Teams>{
  const id = typeof team === 'number' ? team:team.id;
  const url = `${this.teamsUrl}/${id}`;
  return this.http.delete<Teams>(url,TeamService.httpOptions).pipe(
    tap(_ => this.log(`deleted team id=${id}`)),
        catchError(this.handleError<Teams>('deleteHero')));

}

searchTeam(term:string):Observable<Teams[]>{
  if(!term.trim()){
    return of([]);
  }
return this.http.get<Teams[]>(`${this.teamsUrl}/?name=${term}`).pipe(
  tap(_ => this.log ('found team matching ' +term)),
  catchError(this.handleError<Teams[]>('searchTeam')));
}



}
