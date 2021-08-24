import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LeagueMatchSeason} from "../classes/league-match-season";

@Injectable({
    providedIn: 'root'
})
export class MatchService {

    private matchUrl = '';

    constructor(private httpClient: HttpClient) {
        this.matchUrl = 'http://localhost:8080/leagueMatch'
    }

    public getNewestMatchesInLeague(leagueId:String):Observable<Array<LeagueMatchSeason>>{
        return this.httpClient.get<Array<LeagueMatchSeason>>(this.matchUrl + '/latestMatchesInLeague/' + leagueId)
    }

    public getMatchesInLeagueByRound(leagueId:string, round:string):Observable<Array<LeagueMatchSeason>>{
        return this.httpClient.get<Array<LeagueMatchSeason>>(this.matchUrl + '/matchesByLeagueAndRound/' + leagueId + '/' + round);
    }
}
