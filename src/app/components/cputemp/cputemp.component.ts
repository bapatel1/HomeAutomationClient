import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component( {
    selector: "cpu-temp",
    providers: [], // make sure to never accidentally put ROUTER_PROVIDERS here or nothing works.
    directives:[],
    template: require( './cputemp.view.html' )
})
export class CPUTemperature {
    constructor() {
    }
}
