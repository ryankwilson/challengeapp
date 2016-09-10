import { IIdentity } from '../interfaces/index';

export class Identity implements IIdentity {

    teamId: number;
    teamName: string;

    constructor(id: number, name: string) {
        this.teamId = id;
        this.teamName = name;
    }

}
