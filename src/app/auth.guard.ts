import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const _router=inject(Router);
  debugger;

  let sessionData=sessionStorage.getItem('isLoggedIn');
  if(sessionData == 'false'){
    alert("Invalid Username or Password");
    _router.navigateByUrl('/login');
    return false;
  }
  else{
    
    return true;
  }
};
