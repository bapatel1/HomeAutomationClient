import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { provide } from '@angular/core'
import { FORM_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';
import { AppComponent }   from './app.component';
import { Routes, RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { Default } from  './containers/default/default.component';
import { Settings} from  './containers/settings/settings.component';

const appRoutes: Routes = [
  { path: "",          component: Default },
  { path: "settings",  component: Settings}
];

@NgModule({
    declarations: [AppComponent, Default],
    imports:      [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
    ],
    bootstrap:    [
      AppComponent,
    ],
    providers:    [
      [provide(APP_BASE_HREF, { useValue: '/' })],
      [provide(LocationStrategy, { useClass: HashLocationStrategy })],
      //FORM_PROVIDERS, // todo: FormsModule ???
      HTTP_PROVIDERS,
    ]
})
export class AppModule {}
