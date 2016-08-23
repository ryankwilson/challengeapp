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
var register_service_1 = require('./register.service');
var RegisterComponent = (function () {
    function RegisterComponent(_registerService) {
        this._registerService = _registerService;
        this.submitted = false;
    }
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        this._registerService.registerTeam({
            teamName: this.teamName,
            password: this.password,
            confirmPassword: this.confirmPassword
        })
            .subscribe(function (team) { return _this.team = team; }, function (error) { return _this.errorMessage = error; });
        this.submitted = true;
        console.log("" + this.team);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'register.component.html'
        }), 
        __metadata('design:paramtypes', [register_service_1.RegisterService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFHMUMsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFPckQ7SUFVSSwyQkFDWSxnQkFBaUM7UUFBakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUg3QyxjQUFTLEdBQVksS0FBSyxDQUFDO0lBR3NCLENBQUM7SUFFbEQsc0NBQVUsR0FBVjtRQUFBLGlCQWtCQztRQWRHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7WUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDeEMsQ0FBQzthQUNELFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixFQUN4QixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUFDLENBQUM7UUFLN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFHLElBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBbkNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7O3lCQUFBO0lBa0NGLHdCQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQWpDWSx5QkFBaUIsb0JBaUM3QixDQUFBIiwiZmlsZSI6ImFwcC8rcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElUZWFtIH0gZnJvbSAnLi4vc2hhcmVkL3RlYW0nO1xuaW1wb3J0IHsgUmVnaXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9yZWdpc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IElSZWdpc3RyYXRpb25SZXF1ZXN0IH0gZnJvbSAnLi9yZWdpc3RyYXRpb24tcmVxdWVzdCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQge1xuXG4gICAgdGVhbU5hbWU6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuICAgIFxuICAgIHRlYW06IElUZWFtO1xuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgIHN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3JlZ2lzdGVyU2VydmljZTogUmVnaXN0ZXJTZXJ2aWNlKSB7IH1cblxuICAgIG9uUmVnaXN0ZXIoKSB7XG4gICAgICAgIC8vIHZhbGlkYXRlIGZvcm0gaW5wdXRcblxuICAgICAgICAvLyB0cnkgYW5kIHJlZ2lzdGVyXG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyU2VydmljZS5yZWdpc3RlclRlYW0oe1xuICAgICAgICAgICAgdGVhbU5hbWU6IHRoaXMudGVhbU5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogdGhpcy5jb25maXJtUGFzc3dvcmRcbiAgICAgICAgfSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHRlYW0gPT4gdGhpcy50ZWFtID0gdGVhbSxcbiAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XG5cbiAgICAgICAgLy8gcHJvYmxlbSB3aXRoIHJlZ2lzdHJhdGlvblxuXG4gICAgICAgIC8vIHN1Y2Nlc3NmdWwgcmVnaXN0cmF0aW9uXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy50ZWFtfWApO1xuICAgIH1cbiAgICBcbn0iXX0=
