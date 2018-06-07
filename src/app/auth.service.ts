import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

declare var firebase: any;

@Injectable()
export class AuthService {

  constructor(private router:Router) { }

  private currentUser:any;

  login(user, password, nextPage?){
    console.log('login');
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(user, password).then(result=>{
        if(nextPage){
          try{
            this.router.navigate([nextPage || 'inicio']);
          }catch(e){
            this.router.navigate(['inicio']);
          }
        }else{
          this.router.navigate(['inicio']);
        }
        resolve(result);
      }).catch(reject);
    });
  }

  reAuth(nextPath) :Promise<boolean> {
    return new Promise((resolve) => {
      var unsubscribe = firebase.auth().onAuthStateChanged(user=> {
        if (user && (firebase.auth().getUid() === '5V7vi6GqBpYkylnav00Z0mpMF5n2')){
          resolve(true);
        }else{
          resolve(false);
          this.router.navigate(['seguridad/acceso'],{queryParams:{next:nextPath}});
        }
      });
      unsubscribe();
    });
  }

  logout(){
    firebase.auth().signOut();
  }

}
