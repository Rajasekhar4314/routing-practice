import { AuthService } from './auth.service';

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private router : Router,
        private authService : AuthService,
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
            .then((auth) => {
                if(auth){
                    return true;
                }else{
                    this.router.navigate(['/'])
                    return false  // ensure false is explicitly returned
                }
            })
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(childRoute, state)   
    }
}