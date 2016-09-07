import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Config {

    private _copyright: string
    public static configStream: Observable<any>;

    constructor(private http: Http) {
        if(!Config.configStream){
            Config.configStream = this.http.get("config/config.json")
                .map(res => res.json())
                //.share();
                .publishReplay(1)
                .refCount();
        }
    }
    load() {
        return new Promise((resolve, reject) => {
            Config.configStream
                .subscribe((data) => {
                    resolve(data);
                });
        });
    }
};
