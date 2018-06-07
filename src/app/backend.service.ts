import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpParams } from '@angular/common/http';

declare var firebase: any;

@Injectable()
export class BackendService {

  constructor(private router: Router, private http: HttpClient) { }

  get(action, params?) {
    params = params || {};
    return new Promise((resolve, reject) => {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */true).then(idToken => {
        params.token = idToken;
        console.log('GET PARAMS', params);
        this.http.get('https://elite.anubiscorp.com.mx/API/'+action, params).subscribe(data => {
          console.log('GET RESPONSE', data);
          resolve(data);
        }, err => {
          console.error('GET FAILED', err);
          reject(err);
        });
      }).catch(error => {
        console.warn(error);
        this.router.navigate(['seguridad/acceso']);
        reject(error);
      });
    });
  }

}
