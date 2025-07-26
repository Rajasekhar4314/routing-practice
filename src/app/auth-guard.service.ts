import { AuthService } from './auth.service';

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

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
                    return false
                }
            })
    }
}