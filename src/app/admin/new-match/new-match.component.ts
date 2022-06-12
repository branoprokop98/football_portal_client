import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {League} from "../../classes/league";
import {Match} from "../../classes/match";
import {Team} from "../../classes/team";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
    selector: 'app-new-match',
    templateUrl: './new-match.component.html',
    styleUrls: ['./new-match.component.css']
})
export class NewMatchComponent implements OnInit {

    team1 = new Team()
    team2 = new Team()

    selectedTeam = new Team();

    // @ts-ignore
    matchForm: FormGroup;

    league: League | undefined;


    constructor(private formBuilder: FormBuilder) {
        this.team1.league = new League();
        this.team1.name = 'NT'
        this.team1.points = '3'

        this.team2.league = new League();
        this.team2.name = 'SV'
        this.team2.points = '6'
    }

    ngOnInit(): void {
        this.matchForm = this.formBuilder.group({
            league: '',
            round: [{value: '', disabled: false}],
            isNewRound: false,
            matches: this.formBuilder.array(new Array<Match>())
        })
        this.matchForm.valueChanges.subscribe(console.log)
    }

    get matchesForm() {
        return this.matchForm.get('matches') as FormArray
    }

    addMatch() {
        const match = this.formBuilder.group({
            homeTeam: [new Array<Team>(), Validators.required],
            homeGoals: ['', Validators.required],
            guestGoals: ['', Validators.required],
            guestTeam: [new Array<Team>(), Validators.required]
        })

        this.matchesForm.push(match)
    }

    deleteMatch(i: number) {
        this.matchesForm.removeAt(i)
    }

    deleteAll(){
        this.matchesForm.clear();
    }

    submitMatches(){
        console.log(this.matchForm)
    }


    onChange($event: MatCheckboxChange) {
        if($event.checked){
            this.matchForm.controls['round'].disable();
        }else{
            this.matchForm.controls['round'].enable();
        }
    }
}
