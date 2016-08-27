import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'message-flyover',
    templateUrl: 'message-flyover.component.html',
    styleUrls: ['message-flyover.component.css']
})
export class MessageFlyoverComponent {
    @Input() showIf: boolean = false;
    @Input() title: string;
    @Input() message: string;
    @Input() buttonMessage: string;
    @Output() buttonClicked = new EventEmitter();

    onClick() {
        this.buttonClicked.emit();
    }
}
