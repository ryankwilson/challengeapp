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
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var EventListService = (function () {
    function EventListService(http) {
        this.http = http;
        this._getEventsUrl = 'http://rpc-challenge-teams.azurewebsites.net/events';
    }
    EventListService.prototype.get = function () {
        return this.http.get(this._getEventsUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    EventListService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    EventListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EventListService);
    return EventListService;
}());
exports.EventListService = EventListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZXZlbnQtbGlzdC9ldmVudC1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBQy9CLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUdqQztJQUlJLDBCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZ0QixrQkFBYSxHQUFXLHFEQUFxRCxDQUFDO0lBRXBELENBQUM7SUFFbkMsOEJBQUcsR0FBSDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ25DLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU8sc0NBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUMxQixJQUFJLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTztZQUN4QyxLQUFLLENBQUMsTUFBTSxHQUFNLEtBQUssQ0FBQyxNQUFNLFdBQU0sS0FBSyxDQUFDLFVBQVksR0FBRyxjQUFjLENBQUM7UUFDNUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQWxCTDtRQUFDLGlCQUFVLEVBQUU7O3dCQUFBO0lBb0JiLHVCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSx3QkFBZ0IsbUJBbUI1QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvZXZlbnQtbGlzdC9ldmVudC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV2ZW50TGlzdFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfZ2V0RXZlbnRzVXJsOiBzdHJpbmcgPSAnaHR0cDovL3JwYy1jaGFsbGVuZ2UtdGVhbXMuYXp1cmV3ZWJzaXRlcy5uZXQvZXZlbnRzJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgICBnZXQoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLl9nZXRFdmVudHNVcmwpXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAgICAgICBsZXQgZXJyTXNnID0gKGVycm9yLm1lc3NhZ2UpID8gZXJyb3IubWVzc2FnZSA6XG4gICAgICAgICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJNc2cpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xuICAgIH1cblxufSJdfQ==
