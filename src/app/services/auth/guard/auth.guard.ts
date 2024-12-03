import {inject} from "@angular/core";
import { Router} from "@angular/router";
import {AuthService} from "../auth.service";


export const AuthGuard = ()=>{
  const route:Router = inject(Router);
  const authService = inject(AuthService);

  if(!authService.isAuthenticated()){
    route.navigateByUrl("/login");
    return false;
  }
  return true;
}
