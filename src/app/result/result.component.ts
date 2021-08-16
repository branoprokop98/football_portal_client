import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {ActivatedRoute} from "@angular/router";
import {LeagueService} from "../services/league.service";


export interface PeriodicElement {
    home: string;
    result: string;
    guest: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {home: 'Hydrogen', result: '4:3', guest: 'Some'},
    {home: 'Helium', result: '4:3', guest: 'Some'},
    {home: 'Lithium', result: '4:3', guest: 'Some'},
    {home: 'Beryllium', result: '4:3', guest: 'Some'},
    {home: 'Boron', result: '4:3', guest: 'Some'},
    {home: 'Carbon', result: '4:3', guest: 'Some'},
    {home: 'Nitrogen', result: '4:3', guest: 'Some'},
    {home: 'Oxygen', result: '4:3', guest: 'Some'},
    {home: 'Fluorine', result: '4:3', guest: 'Some'},
    {home: 'Neon', result: '4:3', guest: 'Some'},
];


@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    selectedRound = '';
    selectedSeason = '';

    rounds: Number[] | undefined;

    displayedColumns: string[] = ['home', 'result', 'guest'];
    dataSource = ELEMENT_DATA;

    constructor(private route: ActivatedRoute, private leagueService: LeagueService) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.getRoundsInLeague(params['id'])
        })
    }

    private getRoundsInLeague(id: string): void {
        this.leagueService.getAllRoundsInLeagues(id).subscribe(data => {
            this.rounds = data;
        })
    }

}
