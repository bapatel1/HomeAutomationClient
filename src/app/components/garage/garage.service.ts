import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import {Config} from '../../Config';

@Injectable()
export class GarageService {
    apiUrl: string;
    constructor(private http: Http, private config:Config) {

    }
}
