import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => { //interceptor sirve para no tener que poner headers en cada peticion
  const cloneReq: HttpRequest<unknown> = req.clone({ 
    setHeaders: {
      'Content-type': 'application/json',
    }
  })
  return next(cloneReq);
};
