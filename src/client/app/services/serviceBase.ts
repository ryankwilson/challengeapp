export class ServiceBase {

    protected _serviceBaseUrl: string = 'http://rpc-challenge-teams.azurewebsites.net';

    buildUrl(url: string): string {
        return (this._serviceBaseUrl + url);
    }

}
