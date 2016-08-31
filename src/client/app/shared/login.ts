export interface ILoginRequest {
    teamName: string;
    password: string;
}

export interface ILoginResponse {
    teamId: number;
    teamName: string;
}
