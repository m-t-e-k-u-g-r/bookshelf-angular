import {inject, Injectable, signal} from '@angular/core';
import {environment} from '../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {catchError, tap, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.apiUrl + 'auth';
  http = inject(HttpClient);
  isLoggedIn = signal<boolean>(false);

  signup(email: string, password: string) {
    return this.http.post(this.baseUrl + '/signup',
      { email: email, password: password },
      {
        observe: 'response',
        withCredentials: true
      }
    ).pipe(
      tap(() => {
        this.isLoggedIn.set(true);
      }),
      catchError(err => {
        console.error('Failed to signup user:', err);
        return throwError(() => err);
      })
    );
  }

  login(email: string, password: string) {
    return this.http.post(this.baseUrl + '/login',
      { email: email, password: password },
      {
        observe: 'response',
        withCredentials: true
      }
    ).pipe(
      tap(() => {
        this.isLoggedIn.set(true);
      }),
      catchError(err => {
        console.error('Failed to log in user:', err);
        return throwError(() => err);
      })
    );
  }

  refresh(refreshToken: string) {
    return this.http.post(this.baseUrl + '/refresh',
      { refreshToken: refreshToken}
    ).pipe(
      catchError(err => {
        console.error('Failed to refresh token:', err);
        return throwError(() => err);
      })
    )
  }

  logout(refreshToken: string) {
    return this.http.delete(this.baseUrl + '/logout',
      { body: { refreshToken: refreshToken } }
    ).pipe(
      tap(() => {
        this.isLoggedIn.set(false);
      }),
      catchError(err => {
        console.error('Failed to log out:', err);
        return throwError(() => err);
      })
    );
  }
}
