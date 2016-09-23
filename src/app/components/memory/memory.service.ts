import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import {MemoryData} from './memory.mock';
import {Config} from '../../Config';

@Injectable()
export class MemoryService {
    apiUrl: string;

    constructor(private http: Http, private config:Config) {

    }

    _getMemoryInfo(){
      return MemoryData;
    }

}
