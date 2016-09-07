export interface ILoginRequest {
    teamName: string;
    password: string;
}

export interface ILoginResponse {
    teamId: number;
    name: string;
}

export class LoginRequest implements ILoginRequest {

    teamName: string;
    password: string;

    constructor(teamName: string, password: string) {
        this.teamName = teamName;
        this.password = password;
    }

}
