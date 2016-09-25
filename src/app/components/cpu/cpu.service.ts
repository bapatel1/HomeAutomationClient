import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import {CPUData} from './cpu.mock';
import {AppConfig} from '../../appconfig';

@Injectable()
export class CPUService {
    apiUrl: string;

    constructor(private http: Http, private config: AppConfig) {

    }

    _getCPUInfo(){
      return CPUData;
    }

}
