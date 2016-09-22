import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component( {
    selector: "weather",
    providers: [], // make sure to never accidentally put ROUTER_PROVIDERS here or nothing works.
    directives:[],
    template: require( './weather.view.html' )
})
export class Weather {
    constructor() {
    }

    reloadWeather(){
      console.log("Updating weather now.");
      (<any>document.getElementById("forecast_embed")).src += '';
    }

}
