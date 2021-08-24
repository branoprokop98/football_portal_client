import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {ActivatedRoute} from "@angular/router";
import {LeagueService} from "../services/league.service";
import {LeagueMatchSeason} from "../classes/league-match-season";
import {Observable} from "rxjs";
import {error} from "@angular/compiler/src/util";
import {League} from "../classes/league";
import {MatchService} from "../services/match.service";

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    selectedRound = '';
    leagueId = ''
    selectedSeason = '';

    rounds: Number[] | undefined;
    //matches: LeagueMatchSeason[] | undefined;
    matches = new Array<LeagueMatchSeason>();
    latestRound: string | undefined;

    dataSource = this.matches
    displayedColumns: string[] = ['home', 'result', 'guest'];


    constructor(private route: ActivatedRoute, private leagueService: LeagueService, private matchService: MatchService) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.leagueId = params['id'];
            this.getRoundsInLeague(this.leagueId)
            this.getLatestMatchesInLeague(this.leagueId)
            this.getLatestRoundLeague(this.leagueId)
        })
        console.log(this.dataSource)
    }

    private getRoundsInLeague(id: string): void {
        this.leagueService.getAllRoundsInLeagues(id).subscribe(data => {
            this.rounds = data;
        })
    }

    private getLatestMatchesInLeague(leagueId: string): void {
        this.matchService.getNewestMatchesInLeague(leagueId).subscribe(data => {
            //this.matches = data
            this.dataSource = data;
        })
    }

    private getLatestRoundLeague(leagueId: string): void {
        this.leagueService.getLatestRound(leagueId).subscribe(data => {
            this.latestRound = data
            this.selectedRound = data.toString()
        })
    }

    public updateMatches(): void {
        this.matchService.getMatchesInLeagueByRound(this.leagueId, this.selectedRound).subscribe(data => {
            //this.matches = data
            this.dataSource = data
        });
    }

}
