import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import {CPUTempData} from './cputemp.mock';
import {Config} from '../../Config';

@Injectable()
export class CPUTemperatureService {
    apiUrl: string;

    constructor(private http: Http, private config:Config) {

    }

    _getCPUTempInfo(){
      return CPUTempData;
    }

}
