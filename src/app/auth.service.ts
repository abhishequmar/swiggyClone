import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'https://mockapi.io/endpoint/users'; // Replace with your MockAPI endpoint

  constructor(private http: HttpClient) {}

  signIn(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

}
