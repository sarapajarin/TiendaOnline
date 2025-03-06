import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { TokenService } from '../auth/token.service';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => { //interceptor sirve para no tener que poner headers en cada peticion
  
  const token: TokenService = inject(TokenService);
  const accessToken: string = token.getAccessToken();

  const cloneReq: HttpRequest<unknown> = req.clone({ 
    setHeaders: {
      'Content-type': 'application/json',
      ...(accessToken ? {'Authorization': `Bearer `+ accessToken} : undefined) //los puntos suspensivos añaden algo en la peticion 
    }
  })
  return next(cloneReq);
};
