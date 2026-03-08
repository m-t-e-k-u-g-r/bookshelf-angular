import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment} from '../../environments/environment.development';
import {BookWithShelf} from '../models/book.type';
import {catchError, of, throwError} from 'rxjs';
import {SidebarData} from '../models/sidebardata.type';

@Injectable({
  providedIn: 'root',
})
export class ShelfService {
  baseUrl = environment.apiUrl + 'db/shelves/'
  http = inject(HttpClient);

  getShelvedBooks() {
    return this.http.get<BookWithShelf[]>(this.baseUrl)
      .pipe(
        catchError(err => {
          console.error('Failed to load shelved books', err);

          return of([])
        })
      );
  }

  getAllShelves() {
    return this.http.get<string[]>(this.baseUrl + 'names')
      .pipe(
        catchError(err => {
          console.error('Failed to load shelf names', err);
          return [];
        })
      );
  }

  getShelvesOfBook(isbn: string) {
    return this.http.get<string[]>(this.baseUrl + 'b/' + isbn)
      .pipe(
        catchError(err => {
          console.error(`Failed to load shelves of book ${isbn}`, err);
          return [];
        })
      );
  }

  getSidebarData() {
    return this.http.get<SidebarData[]>(this.baseUrl + 'sidebar')
      .pipe(
        catchError(err => {
          console.error('Failed to load sidebar data', err);
          return [];
        })
      );
  }

  createShelf(shelfName: string) {
    return this.http.post(this.baseUrl + shelfName, {  })
      .pipe(
        catchError(err => {
          console.error('Failed to create shelf', err);
          return throwError(() => err);
        })
      );
  }

  renameShelf(oldName: string, newName: string) {
    return this.http.put(this.baseUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        oldShelfName: oldName,
        newShelfName: newName
      })
    }).pipe(
      catchError(err => {
        console.log('Failed to rename shelf', err);
        return throwError(() => err);
      })
    );
  }

  deleteShelf(shelfName: string) {
    return this.http.delete(this.baseUrl + shelfName)
      .pipe(
        catchError(err => {
          console.error('Failed to delete shelf', err);
          return throwError(() => err);
        })
      );
  }

  editShelvesOfBook(isbn: string, shelves: string[]) {
    return this.http.post(this.baseUrl, {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        isbn: isbn,
        shelves: shelves
      })
    }).pipe(
      catchError(err => {
        console.error('Failed to edit shelves', err);
        return throwError(() => err);
      })
    );
  }
}
