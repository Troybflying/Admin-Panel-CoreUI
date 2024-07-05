import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const _router=inject(Router);

  let isloggedIn=sessionStorage.getItem("isloggedIn");
  if(isloggedIn=='false'){
    alert("Invalid Username or Password");
    _router.navigateByUrl('/login');
    return false;
  }


  
  return true;
};
