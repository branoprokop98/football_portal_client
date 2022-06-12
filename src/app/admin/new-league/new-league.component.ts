import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Team} from "../../classes/team";

@Component({
    selector: 'app-new-league',
    templateUrl: './new-league.component.html',
    styleUrls: ['./new-league.component.css']
})
export class NewLeagueComponent implements OnInit {

    // @ts-ignore
    leagueForm: FormGroup

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.leagueForm = this.formBuilder.group({
            leagueName: ['', [Validators.required]],
            teams: this.formBuilder.array(new Array<Team>())
        })

        this.leagueForm.valueChanges.subscribe(console.log)
    }

    get getTeamsForm() {
        return this.leagueForm.get('teams') as FormArray
    }

    addTeam() {
        const team = this.formBuilder.group({
            name: ['', Validators.required]
        })

        this.getTeamsForm.push(team)
    }

    deleteTeam(i: number) {
        this.getTeamsForm.removeAt(i)
    }

    deleteAll(){
        this.getTeamsForm.clear()
    }

    submitLeague(){
        console.log(this.leagueForm)
    }

}
