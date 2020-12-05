import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthentificationService } from './authentification.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
   
  constructor(private authService: AuthentificationService, private router: Router) {
    
  }
  
  canActivate(): boolean {
    const authenticated = this.authService.isAuthentificated() 
    if (!authenticated) {
      this.router.navigate(['/login']);
    }
    return authenticated ;
  }
  
}
