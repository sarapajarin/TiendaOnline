import { Injectable } from '@angular/core';
import {CookieService } from "ngx-cookie-service";
import { enviroment } from '../../../envioments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly ACCESS_TOKEN_KEY = 'tienda_token'; //caduca cada hora
  private readonly REFRESH_TOKEN_KEY = 'tienda_refresh_token';//para no tener que estar refrecando todo el rato

  constructor(
    private cookieService: CookieService,
  ) { }

  saveTokens(token: string, refreshToken: string): void {
    this.cookieService.set(this.ACCESS_TOKEN_KEY, token,{
      path: "/", //para que afecte a todas las páginas de la web
      secure: enviroment.tokenSecure, //en produccion cambiar a true
      sameSite: "Strict"
    });

    this.cookieService.set(this.REFRESH_TOKEN_KEY, refreshToken, {
      path: "/", //para que afecte a todas las páginas de la web
      secure: enviroment.tokenSecure, //en produccion cambiar a true
      sameSite: "Strict"
    });
  }

  getAccessToken(): string {
    return this.cookieService.get(this.ACCESS_TOKEN_KEY);
  }

  getRefreshToken(): string {
    return this.cookieService.get(this.REFRESH_TOKEN_KEY);
  }

  removeToken(): void{
    this.cookieService.delete(this.ACCESS_TOKEN_KEY, '/', '', enviroment.tokenSecure, 'Strict')
    this.cookieService.delete(this.REFRESH_TOKEN_KEY, '/', '', enviroment.tokenSecure, 'Strict');
  }
}
