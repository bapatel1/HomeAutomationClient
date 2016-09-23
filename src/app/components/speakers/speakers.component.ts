import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component( {
    selector: "speakers",
    providers: [], // make sure to never accidentally put ROUTER_PROVIDERS here or nothing works.
    directives:[],
    template: require( './speakers.view.html' )
})
export class Speakers {
    constructor() {
    }
}
