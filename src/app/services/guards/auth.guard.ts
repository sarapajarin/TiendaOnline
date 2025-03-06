import { inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';
import { TokenService } from '../auth/token.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { enviroment } from '../../../envioments/enviroment';

export const authGuard: CanActivateFn = async (route, state) => {

  const tokenService: TokenService = inject(TokenService);
  const router: Router = inject(Router);
  const http: HttpClient = inject(HttpClient);

  const accessToken : string = tokenService.getAccessToken();
  const refreshToken : string = tokenService.getRefreshToken();


  if (!accessToken){
    router.navigate(['login']);
    return false; //no permitimos acceder al usuario
  }

try{
    const response: any = await firstValueFrom(
      http.post(`${enviroment.apiUrl}/api/users/check-token`, {
        username: "sara",
        token: accessToken,
      })  
    );
    return true;
 } 
 catch(error){
  tokenService.removeToken();
  router.navigate(['login']);
  return false;
 }
};

