import {Component, OnInit} from "@angular/core";
import {FORM_PROVIDERS, NgStyle} from '@angular/common';
import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
/**
 * App component -- The parent component for the application; defines routes for external parent views (login) and internal ones (default).
 */
@Component( {
    selector: "the-app",
    providers: [],
    directives: [ROUTER_DIRECTIVES],
    template: require( './app.view.html' )
})
export class AppComponent implements OnInit {

    constructor(  ) {
        // ...
    }

    ngOnInit() {
        // ...
    }

}
