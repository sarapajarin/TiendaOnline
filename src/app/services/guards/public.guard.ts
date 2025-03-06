import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../auth/token.service';

export const publicGuard: CanActivateFn = (route, state) => {

  const tokenService: TokenService = Inject(TokenService);
  const router: Router = Inject(Router);
  
  const accessToken : string = tokenService.getAccessToken();
  const refreshToken : string = tokenService.getRefreshToken();
  
  
if (accessToken){
  router.navigate(['']);
  return true; //no permitimos acceder al usuario
}

return false; //no permitimos acceder al usuario
};
  
