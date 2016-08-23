"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var RegisterService = (function () {
    function RegisterService(_http) {
        this._http = _http;
        this.registerTeamUri = 'http://rpc-challenge-teams.azurewebsites.net/teams';
    }
    RegisterService.prototype.registerTeam = function (request) {
        return this._http.post(this.registerTeamUri, {
            Name: request.teamName,
            Password: request.password
        })
            .map(this.handleSuccess)
            .catch(this.handleError);
    };
    RegisterService.prototype.handleSuccess = function (response) {
        console.log(response);
        return response.json();
    };
    RegisterService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    RegisterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RegisterService);
    return RegisterService;
}());
exports.RegisterService = RegisterService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rcmVnaXN0ZXIvcmVnaXN0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQU03QztJQUlJLHlCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUYvQixvQkFBZSxHQUFXLG9EQUFvRCxDQUFDO0lBSS9FLENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsT0FBNkI7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNsQixJQUFJLENBQUMsZUFBZSxFQUNwQjtZQUNJLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUTtZQUN0QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7U0FDN0IsQ0FBQzthQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLHVDQUFhLEdBQXJCLFVBQXNCLFFBQWtCO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8scUNBQVcsR0FBbkIsVUFBb0IsS0FBZTtRQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUE1Qkw7UUFBQyxpQkFBVSxFQUFFOzt1QkFBQTtJQTZCYixzQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlksdUJBQWUsa0JBNEIzQixDQUFBIiwiZmlsZSI6ImFwcC8rcmVnaXN0ZXIvcmVnaXN0ZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgSVRlYW0gfSBmcm9tICcuLi9zaGFyZWQvdGVhbSc7XG5pbXBvcnQgeyBJUmVnaXN0cmF0aW9uUmVxdWVzdCB9IGZyb20gJy4vcmVnaXN0cmF0aW9uLXJlcXVlc3QnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJTZXJ2aWNlIHtcblxuICAgIHJlZ2lzdGVyVGVhbVVyaTogc3RyaW5nID0gJ2h0dHA6Ly9ycGMtY2hhbGxlbmdlLXRlYW1zLmF6dXJld2Vic2l0ZXMubmV0L3RlYW1zJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHtcblxuICAgIH1cblxuICAgIHJlZ2lzdGVyVGVhbShyZXF1ZXN0OiBJUmVnaXN0cmF0aW9uUmVxdWVzdCk6IE9ic2VydmFibGU8SVRlYW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJUZWFtVXJpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIE5hbWU6IHJlcXVlc3QudGVhbU5hbWUsXG4gICAgICAgICAgICAgICAgUGFzc3dvcmQ6IHJlcXVlc3QucGFzc3dvcmRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGxlU3VjY2VzcylcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZVN1Y2Nlc3MocmVzcG9uc2U6IFJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcbiAgICB9XG59Il19
