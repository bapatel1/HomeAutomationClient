import {Component, provide, HostListener} from "@angular/core";

@Component({
    selector: "default",
    providers: [], // make sure to never accidentally put ROUTER_PROVIDERS here or nothing works.
    directives:[],
    template: require('./default.view.html')
})
export class Default {
    constructor() {
    }
    public isCollapsed: boolean = false;

    public collapsed(event: any): void {
        console.log(event);
    }

    public expanded(event: any): void {
        console.log(event);
    }
}
