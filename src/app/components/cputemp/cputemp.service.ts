import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import {CPUTempData} from './cputemp.mock';
import {AppConfig} from '../../appconfig';

@Injectable()
export class CPUTemperatureService {
    apiUrl: string;

    constructor(private http: Http, private config: AppConfig) {

    }

    _getCPUTempInfo(){
      return CPUTempData;
    }

}
