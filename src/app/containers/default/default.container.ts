import {Component, provide, HostListener} from "@angular/core";
import {UiSwitchModule} from "angular2-ui-switch";

// My-Custom controls
import {Weather} from "../../components/weather/weather.component";
import {CPU} from "../../components/cpu/cpu.component";
import {Memory} from "../../components/memory/memory.component";
import {System} from "../../components/system/system.component";
import {RestartPi} from "../../components/restart/restart.component";
import {ShutdownPi} from "../../components/shutdown/shutdown.component";
import {CPUTemperature} from "../../components/cputemp/cputemp.component";
import {Garage} from "../../components/garage/garage.component";
import {Sprinkler} from "../../components/sprinkler/sprinkler.component";
import {SecurityAlarm} from "../../components/security-alarm/security-alarm.component";
import {Lights} from "../../components/lights/lights.component";
import {Speakers} from "../../components/speakers/speakers.component";


@Component({
    selector: "default",
    providers: [], // make sure to never accidentally put ROUTER_PROVIDERS here or nothing works.
    directives:[
      Weather,
      CPU,
      Memory,
      System,
      RestartPi,
      ShutdownPi,
      CPUTemperature,
      Garage,
      Sprinkler,
      SecurityAlarm,
      Lights,
      Speakers
    ],
    template: require('./default.view.html')
})
export class Default {
    constructor() {
    }
    public isCollapsed: boolean = true;
    isGarageOpened:boolean = true;
    public collapsed(event: any): void {
        console.log(event);
    }
    public expanded(event: any): void {
        console.log(event);
    }
}
