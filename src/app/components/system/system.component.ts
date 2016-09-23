import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {SystemService} from "./system.service";

@Component( {
    selector: "system",
    providers: [SystemService], // make sure to never accidentally put ROUTER_PROVIDERS here or nothing works.
    directives:[],
    template: require( './system.view.html' )
})
export class System {
  systemData:any = {};
  manufacturer:string = "";
  model:string = "";
  version:string = "";
  serial:string = "";
  uuid:string = "";

  constructor(private systemservice:SystemService) {
    this.systemData = this.systemservice._getSystemInfo();
    console.log('-------CPU Temp Data--------');
    console.log(this.systemData);
    this.manufacturer = this.systemData.manufacturer;
    this.model = this.systemData.model;
    this.version = this.systemData.version;
    this.serial = this.systemData.serial;
    this.uuid = this.systemData.uuid;
  }

  refresh(){
    console.log('Refreshing System Info...');
  }
}
