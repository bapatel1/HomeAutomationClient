import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {CPUService} from "./cpu.service";

@Component( {
    selector: "cpu",
    providers: [CPUService], // make sure to never accidentally put ROUTER_PROVIDERS here or nothing works.
    directives:[],
    template: require( './cpu.view.html' )
})
export class CPU {
    cpuData:any = {};
    manufacturer:string = "";
    brand:string = "";
    speed:string = "";
    cores:string = "";
    constructor(private cpuservice:CPUService) {
      this.cpuData = this.cpuservice._getCPUInfo();
      console.log('-------CPU Data--------');
      console.log(this.cpuData);
      this.manufacturer = this.cpuData.manufacturer;
      this.brand = this.cpuData.brand;
      this.speed = this.cpuData.speed;
      this.cores = this.cpuData.cores;
    }

    refresh(){
      console.log('Refreshing CPU...');
    }
}
