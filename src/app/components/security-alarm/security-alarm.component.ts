import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component( {
    selector: "security-alarm",
    providers: [], // make sure to never accidentally put ROUTER_PROVIDERS here or nothing works.
    directives:[],
    template: require( './security-alarm.view.html' )
})
export class SecurityAlarm {
    constructor() {
    }
}
