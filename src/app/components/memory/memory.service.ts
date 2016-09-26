import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import {MemoryData} from './memory.mock';
import {AppConfig} from '../../appconfig';

@Injectable()
export class MemoryService {
    apiUrl: string;

    constructor(private http: Http, private config: AppConfig) {

    }

    _getMemoryInfo(){
      return MemoryData;
    }

}
