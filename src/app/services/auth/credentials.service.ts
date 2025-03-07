import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from '../../../envioments/enviroment';
import { HttpClient } from '@angular/common/http';
import { LoginInterface } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor(
    private http: HttpClient,
  ) { }
  login(credentials: LoginInterface): Observable<any> {
    return this.http.post<any>(`${enviroment.apiUrl}/login`, {});
  }
  register(credentials: LoginInterface): Observable<any> {
    return this.http.post<any>(`${enviroment.apiUrl}/register`, {});
  }
}
