import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import {CPUData} from './cpu.mock';
import {Config} from '../../config';

@Injectable()
export class CPUService {
    apiUrl: string;

    constructor(private http: Http, private config:Config) {

    }

    _getCPUInfo(){
      return CPUData;
    }

}
