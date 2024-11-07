import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


export interface User {
  password: string;
  phoneNumber?: string;
  name?: string;
  email?: string;
  address?: string;
}



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'https://672cb4131600dda5a9f98e07.mockapi.io/api/v1/user/user'; // Replace with your MockAPI URL
  private userData = new BehaviorSubject<User | null>(null);
  userData$ = this.userData.asObservable();

  

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      this.userData.next(JSON.parse(storedUser));
    }
  }

  isAuthenticated(): boolean {
    return !!this.userData.value;
  }





login(email: string, password: string): Observable<User | null> {
  
  return this.http.get<User[]>(`${this.apiUrl}`).pipe(
    tap((users) => {
      // Log the entire user data array retrieved from the API
      console.log('All users retrieved from API:', users);

      // Find the user with matching email and password
      let matchingUser ;
      for (const user of users) {
          if (user.email === email && user.password === password) {
            matchingUser = user; // Set true if a match is found
            break; // Exit the loop early if a match is found
          }
        }
      

      if (matchingUser) {
        this.userData.next(matchingUser);
        localStorage.setItem('userData', JSON.stringify(matchingUser));
      } else {
        this.userData.next(null);
        localStorage.removeItem('userData'); // Clear data if login fails
        console.log()
      }
    }),
    map((users) => users.find(user => user.email === email && user.password === password) || null)
  );
}





    // Method to check if the user is already logged in
  getUserData(): Observable<User | null> {
    return this.userData.asObservable();
  }

signup(
    name: string,
    email: string,
    password: string,
    phoneNumber: string,
    
    
    address: string
  ): Observable<User> {
    const newUser: User = { address, phoneNumber, name, email, password };
    return this.http.post<User>(this.apiUrl, newUser).pipe(
      tap((user) => {
        this.userData.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
      })
    );

  }

  logout() {
    this.userData.next(null);
    localStorage.removeItem('userData');
  }
}


