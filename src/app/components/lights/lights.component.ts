import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component( {
    selector: "lights",
    providers: [], // make sure to never accidentally put ROUTER_PROVIDERS here or nothing works.
    directives:[],
    template: require( './lights.view.html' )
})
export class Lights {
    constructor() {
    }
}
