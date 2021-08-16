import {League} from "./league";
import {LeagueMatchPK} from "./league-match-pk";
import {Match} from "./match";

export class LeagueMatch {
    id: LeagueMatchPK | undefined;
    league: League | undefined;
    round: string | undefined;
    match: Match | undefined;
}
