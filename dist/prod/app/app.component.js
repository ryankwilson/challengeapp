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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var index_1 = require('./shared/index');
var index_2 = require('./+register/index');
var AppComponent = (function () {
    function AppComponent() {
        console.log('Environment config', index_1.Config);
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            viewProviders: [index_2.RegisterService, index_1.EventListService, http_1.HTTP_PROVIDERS],
            templateUrl: 'app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, index_1.NavbarComponent, index_1.ToolbarComponent, index_1.EventListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBRS9DLHNCQUFnRyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2pILHNCQUFnQyxtQkFBbUIsQ0FBQyxDQUFBO0FBU3BEO0lBQ0U7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLGNBQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFWSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsYUFBYSxFQUFFLENBQUMsdUJBQWUsRUFBRSx3QkFBZ0IsRUFBRSxxQkFBYyxDQUFDO1lBQ2xFLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsdUJBQWUsRUFBRSx3QkFBZ0IsRUFBRSwwQkFBa0IsQ0FBQztTQUN2RixDQUFDOztvQkFBQTtJQUtGLG1CQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSxvQkFBWSxlQUl4QixDQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgeyBDb25maWcsIE5hdmJhckNvbXBvbmVudCwgVG9vbGJhckNvbXBvbmVudCwgRXZlbnRMaXN0U2VydmljZSwgRXZlbnRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHsgUmVnaXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi8rcmVnaXN0ZXIvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzZC1hcHAnLFxuICB2aWV3UHJvdmlkZXJzOiBbUmVnaXN0ZXJTZXJ2aWNlLCBFdmVudExpc3RTZXJ2aWNlLCBIVFRQX1BST1ZJREVSU10sXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBOYXZiYXJDb21wb25lbnQsIFRvb2xiYXJDb21wb25lbnQsIEV2ZW50TGlzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ0Vudmlyb25tZW50IGNvbmZpZycsIENvbmZpZyk7XG4gIH1cbn1cbiJdfQ==
