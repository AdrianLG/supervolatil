import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "./../../../../app/auth.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {

  public user:string;
  public password:string;
  public authError:any;

  private subscription:any;
  private nextPage:string;

  constructor(private auth:AuthService, private route:ActivatedRoute) {
    this.user='volatil@anubiscorp.com.mx';
    this.password='';
    this.nextPage = '';    
   }

  ngOnInit() {
    this.auth.logout();
    this.subscription = this.route.queryParams.subscribe(params=>{
      this.nextPage = params['next']||'';
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  login(){
    this.authError = '';
    this.auth.login(this.user, this.password, this.nextPage).catch(error => {
      this.authError = error;
      this.password = '';
    });
  }

}
