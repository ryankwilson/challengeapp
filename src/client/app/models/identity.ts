export interface IIdentity {
    teamId: number;
    teamName: string;
}

export class Identity implements IIdentity {

    teamId: number;
    teamName: string;

    constructor(id: number, name: string) {
        this.teamId = id;
        this.teamName = name;
    }

}
