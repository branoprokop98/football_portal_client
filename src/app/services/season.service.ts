import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Season} from "../classes/season";

@Injectable({
    providedIn: 'root'
})
export class SeasonService {

    private requestURL = '';

    constructor(private httpClient: HttpClient) {
        this.requestURL = 'http://localhost:8080/season'
    }

    public getAllSeason(): Observable<Season[]> {
        return this.httpClient.get<Season[]>(this.requestURL + '/getAll');
    }


}
