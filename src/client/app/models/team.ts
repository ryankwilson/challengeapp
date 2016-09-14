export interface ITeamMember {
    name: string;
}

export interface ITeam {
    TeamId: number;
    Name: string;
    TeamMembers: ITeamMember[];
}

export class TeamMember implements ITeamMember {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
