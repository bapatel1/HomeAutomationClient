import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppConfig {

    private _copyright: string
    public static configStream: Observable<any>;

    constructor(private http: Http) {
        if(!AppConfig.configStream){
            AppConfig.configStream = this.http.get("config/config.json")
                .map(res => res.json())
                //.share();
                .publishReplay(1)
                .refCount();
        }
    }
    load() {
        return new Promise((resolve, reject) => {
            AppConfig.configStream
                .subscribe((data) => {
                    resolve(data);
                });
        });
    }
};
