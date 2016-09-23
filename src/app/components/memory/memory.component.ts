import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {MemoryService} from "./memory.service";

@Component( {
    selector: "memory",
    providers: [MemoryService], // make sure to never accidentally put ROUTER_PROVIDERS here or nothing works.
    directives:[],
    template: require( './memory.view.html' )
})
export class Memory {
  memoryData:any = {};
  total:string = "";
  free :string = "";
  used :string = "";
  active :string = "";
  buffcache :string = "";
  available :string = "";

  constructor(private memoryservice:MemoryService) {
    this.memoryData = this.memoryservice._getMemoryInfo();
    console.log('-------CPU Temp Data--------');
    console.log(this.memoryData);
    this.total = this.memoryData.total;
    this.free = this.memoryData.free;
    this.used = this.memoryData.used;
    this.active = this.memoryData.active;
    this.buffcache = this.memoryData.buffcache;
    this.available = this.memoryData.available;
  }

  refresh(){
    console.log('Refreshing Memory Info...');
  }
}
