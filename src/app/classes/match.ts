import {Team} from "./team";

export class Match {
    id: string | undefined;
    homeGoals: string | undefined;
    guestGoals: string | undefined;
    homeTeam: Team | undefined;
    guestTeam: Team | undefined;
}
