import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanActivate {
    
    constructor(public router: Router) {
        
    }
    
    canActivate(): boolean {
        return true;
    }
}