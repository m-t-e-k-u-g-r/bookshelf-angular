import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment} from '../../environments/environment.development';
import {Book} from '../models/book.type';
import {catchError, of, throwError} from 'rxjs';
import {removeHyphen} from '../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  baseUrl = environment.apiUrl + 'db/books/';
  http = inject(HttpClient);
  books = signal<Book[]>([]);

  getBooks() {
    return this.http.get<Book[]>(this.baseUrl)
      .pipe(
        catchError(err => {
          console.error('Failed to load books', err);

          this.books.set([]);
          return of([]);
        })
      ).subscribe(books => {
        this.books.set(books);
      })
  }

  addBook(isbn: string) {
    const cleanIsbn = removeHyphen(isbn);

    return this.http.post(this.baseUrl + cleanIsbn, {
    }).pipe(
      catchError(err => {
        console.error('Failed to add book', err);
        return throwError(() => err);
      })
    );
  }

  addBatch(batch: string[]) {
    if (batch.length <= 0) return throwError(() => 'Empty batch');
    return this.http.post(this.baseUrl + 'batch', {
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        isbns: batch
      })
    }).pipe(
      catchError(err => {
        console.error('Failed to add batch', err);
        return throwError(() => err);
      })
    )
  }

  deleteBook(title: string, isbn: string) {
    const confirmed = confirm(`Delete book ${title}?`);
    if (!confirmed) return;

    return this.http.delete(this.baseUrl + isbn)
      .pipe(
        catchError(err => {
          console.error('Failed to delete book', err);
          return throwError(() => err);
        })
      );
  }
}
