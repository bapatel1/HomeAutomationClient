import {Component, provide, HostListener} from "@angular/core";
import { UiSwitchModule } from 'angular2-ui-switch';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [UiSwitchModule]
})
@Component({
    selector: "default",
    providers: [UiSwitchModule], // make sure to never accidentally put ROUTER_PROVIDERS here or nothing works.
    directives: [],
    template: require('./default.view.html')
})
export class Default {

    constructor() {
    }


}
