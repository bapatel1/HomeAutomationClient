import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component( {
    selector: "restart-pi",
    providers: [], // make sure to never accidentally put ROUTER_PROVIDERS here or nothing works.
    directives:[],
    template: require( './restart.view.html' )
})
export class RestartPi {
    constructor() {
    }
}
