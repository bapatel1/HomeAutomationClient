import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {CPUTemperatureService} from "./cputemp.service";

@Component( {
    selector: "cpu-temp",
    providers: [CPUTemperatureService], // make sure to never accidentally put ROUTER_PROVIDERS here or nothing works.
    directives:[],
    template: require( './cputemp.view.html' )
})
export class CPUTemperature {
  cpuTempData:any = {};
  main:string = "";
  cores = [];
  max :string = "";

  constructor(private cpuservice:CPUTemperatureService) {
    this.cpuTempData = this.cpuservice._getCPUTempInfo();
    console.log('-------CPU Temp Data--------');
    console.log(this.cpuTempData);
    this.main = this.cpuTempData.main;
    this.cores = this.cpuTempData.cores;
    this.max = this.cpuTempData.max;
  }

  refresh(){
    console.log('Refreshing CPU Temp...');
  }
}
