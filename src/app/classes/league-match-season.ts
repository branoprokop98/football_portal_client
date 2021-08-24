import {League} from "./league";
import {LeagueMatchSeasonPk} from "./league-match-season-pk";
import {Match} from "./match";
import {Season} from "./season";

export class LeagueMatchSeason {
    id: LeagueMatchSeasonPk | undefined;
    league: League | undefined;
    round: string | undefined;
    match: Match | undefined;
    season: Season | undefined;
}
