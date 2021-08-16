import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {League} from "../classes/league";

@Injectable({
    providedIn: 'root'
})
export class LeagueService {

    private leagueURL: string;
    private leagueMatchURL: string;

    constructor(private httpClient: HttpClient) {
        this.leagueURL = 'http://localhost:8080/league'
        this.leagueMatchURL = 'http://localhost:8080/leagueMatch'
    }

    public getAllLeagues(): Observable<League[]> {
        return this.httpClient.get<League[]>(this.leagueURL + '/getAll')
    }

    public getAllRoundsInLeagues(id: string): Observable<Number[]> {
        return this.httpClient.get<Number[]>(this.leagueMatchURL + '/getAllRoundsInLeagues/' + id);
    }
}
