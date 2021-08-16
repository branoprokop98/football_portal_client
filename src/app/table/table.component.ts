import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {ActivatedRoute} from "@angular/router";
import {SeasonService} from "../services/season.service";
import {Season} from "../classes/season";
import {Team} from "../classes/team";
import {TeamService} from "../services/team.service";

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {

    selected = 'option1';
    seasons: Season[] | undefined;
    teams = new Array<Team>();

    displayedColumns: string[] = ['position', 'name', 'matches', 'winnings', 'looses', 'draws', 'score', 'points'];
    dataSource =  new MatTableDataSource(this.teams);

    @ViewChild(MatSort) sort: MatSort | undefined;

    ngAfterViewInit() {
        // @ts-ignore
        this.dataSource.sort = this.sort;
    }

    constructor(private route: ActivatedRoute, private seasonService: SeasonService, private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.seasonService.getAllSeason().subscribe(data => {
            this.seasons = data;
        })
        this.getAllTeamsInLeague();
    }

    private getAllTeamsInLeague(): void {
        this.route.queryParams.subscribe(params => {
            this.teamService.getAllTeamsByLeagueId(params['id']).subscribe(data => {
                this.teams = data;
                this.dataSource = new MatTableDataSource(data)
                // @ts-ignore
                this.dataSource.sort = this.sort;
            })
        })
    }

}
