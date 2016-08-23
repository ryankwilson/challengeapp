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
var event_list_service_1 = require('./event-list.service');
var EventListComponent = (function () {
    function EventListComponent(eventListService) {
        this.eventListService = eventListService;
    }
    EventListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventListService.get()
            .subscribe(function (events) { return _this.events = events; }, function (error) { return _this._errorMessage = error; });
    };
    EventListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'event-list',
            templateUrl: 'event-list.component.html',
            viewProviders: [event_list_service_1.EventListService]
        }), 
        __metadata('design:paramtypes', [event_list_service_1.EventListService])
    ], EventListComponent);
    return EventListComponent;
}());
exports.EventListComponent = EventListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZXZlbnQtbGlzdC9ldmVudC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELG1DQUFpQyxzQkFFakMsQ0FBQyxDQUZzRDtBQVF2RDtJQUtJLDRCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFM0QscUNBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRTthQUN0QixTQUFTLENBQ04sVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBcEIsQ0FBb0IsRUFDOUIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFRLEtBQUssRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFsQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsYUFBYSxFQUFFLENBQUMscUNBQWdCLENBQUM7U0FDcEMsQ0FBQzs7MEJBQUE7SUFlRix5QkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksMEJBQWtCLHFCQWM5QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvZXZlbnQtbGlzdC9ldmVudC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudExpc3RTZXJ2aWNlIH0gZnJvbSAnLi9ldmVudC1saXN0LnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdldmVudC1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2V2ZW50LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHZpZXdQcm92aWRlcnM6IFtFdmVudExpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBFdmVudExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGV2ZW50czogYW55W107XG4gICAgcHJpdmF0ZSBfZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2ZW50TGlzdFNlcnZpY2U6IEV2ZW50TGlzdFNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0U2VydmljZS5nZXQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBldmVudHMgPT4gdGhpcy5ldmVudHMgPSBldmVudHMsXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG4gICAgfVxuXG59Il19
