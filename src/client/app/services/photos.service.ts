import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/throw';

import { ServiceBase } from './servicebase';

@Injectable()
export class PhotosService extends ServiceBase {

    constructor(private http: Http) {
        super();
    }

    uploadFile(file: File) {
        let url: string = this.buildUrl('/photos/upload');
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append('file', file, file.name);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }
}
