import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component( {
    selector: "shutdown-pi",
    providers: [], // make sure to never accidentally put ROUTER_PROVIDERS here or nothing works.
    directives:[],
    template: require( './shutdown.view.html' )
})
export class ShutdownPi {
    constructor() {
    }
}
