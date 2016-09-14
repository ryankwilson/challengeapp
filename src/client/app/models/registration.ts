import { ITeamMember } from './team';

export interface IRegistrationRequest {
    teamName: string;
    password: string;
    confirmPassword: string;
    members: ITeamMember[];
    eventId: number;
}
