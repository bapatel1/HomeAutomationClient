import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component( {
    selector: "sprinkler",
    providers: [], // make sure to never accidentally put ROUTER_PROVIDERS here or nothing works.
    directives:[],
    template: require( './sprinkler.view.html' )
})
export class Sprinkler {
    constructor() {
    }
}
