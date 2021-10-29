import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserLoginService } from "../services/user-login.service";

const ROLE_TO_PATH_MAP = {
  'tech-interviewer': '/tech-interviewer',
  'manager': '/manager',
  'mentor': '/mentor',
  'admin': '/admin',
  'form': '/form',
  'recruiter': '/recruiter'
}

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivateChild {

  constructor (private userLoginService: UserLoginService, private routerService: Router) {}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {

    const role = this.userLoginService.getRole();
    const rolePath = ROLE_TO_PATH_MAP[role];
    if (rolePath === undefined) {
      console.log('Unknown role');
    }
    if (rolePath === state.url) {
      return true;
    }
    return this.routerService.parseUrl(rolePath);
  }
}
