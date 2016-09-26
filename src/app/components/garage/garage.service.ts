import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import {AppConfig} from '../../appconfig';

@Injectable()
export class GarageService {
    apiUrl: string;
    constructor(private http: Http, private config:AppConfig) {

    }
}
