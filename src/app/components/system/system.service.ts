import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import {SystemData} from './system.mock';
import {AppConfig} from '../../appconfig';

@Injectable()
export class SystemService {
    apiUrl: string;

    constructor(private http: Http, private config: AppConfig) {

    }

    _getSystemInfo(){
      return SystemData;
    }

}
