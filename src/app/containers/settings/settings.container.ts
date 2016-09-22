import {Component, provide, HostListener} from "@angular/core";
@Component({
    selector: "settings",
    providers: [], // make sure to never accidentally put ROUTER_PROVIDERS here or nothing works.
    directives: [],
    template: require('./settings.view.html')
})
export class Settings {
    constructor() { }

}
