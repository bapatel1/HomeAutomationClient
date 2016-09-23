import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import {SystemData} from './system.mock';
import {Config} from '../../Config';

@Injectable()
export class SystemService {
    apiUrl: string;

    constructor(private http: Http, private config:Config) {

    }

    _getSystemInfo(){
      return SystemData;
    }

}
