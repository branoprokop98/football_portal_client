import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Team} from "../classes/team";
import {ActivatedRoute} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    private teamURL = '';

    constructor(private httpClient: HttpClient) {
        this.teamURL = 'http://localhost:8080/team'
    }

    public getAllTeamsByLeagueId(id: string): Observable<Team[]> {
        return this.httpClient.get<Team[]>(this.teamURL + '/getTeamsByLeagueId/' + id);
    }
}
