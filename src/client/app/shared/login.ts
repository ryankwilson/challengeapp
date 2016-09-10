export interface ILoginRequest {
    teamName: string;
    password: string;
}

export interface ILoginResponse {
    TeamId: number;
    Name: string;
}

export class LoginRequest implements ILoginRequest {

    teamName: string;
    password: string;

    constructor(teamName: string, password: string) {
        this.teamName = teamName;
        this.password = password;
    }

}
