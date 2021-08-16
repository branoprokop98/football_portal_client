import {Component, OnInit} from '@angular/core';
import {LeagueService} from "../services/league.service";
import {League} from "../classes/league";

@Component({
    selector: 'app-league-selection',
    templateUrl: './league-selection.component.html',
    styleUrls: ['./league-selection.component.css']
})
export class LeagueSelectionComponent implements OnInit {

    public leagues: League[] | undefined;

    panelOpenState = false

    constructor(private leagueService: LeagueService) {
    }

    ngOnInit(): void {
        this.leagueService.getAllLeagues().subscribe(data =>{
            this.leagues = data;
        })
    }

}
