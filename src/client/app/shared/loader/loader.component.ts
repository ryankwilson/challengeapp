import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'rpc-loader',
    templateUrl: 'loader.component.html',
    styleUrls: ['loader.component.css']
})
export class LoaderComponent {
    @Input() fullscreen: boolean = false;
    @Input() showIf: boolean = false;
}
