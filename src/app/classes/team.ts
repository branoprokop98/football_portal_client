import {League} from "./league";
import {Match} from "./match";

export class Team {
    id: string | undefined;
    name: string | undefined;
    winnings: string | undefined;
    looses: string | undefined;
    draws: string | undefined;
    points: string | undefined;
    matches: string | undefined;
    scoredGoals: string | undefined;
    collectedGoals: string | undefined;
    league: League | undefined;

}
