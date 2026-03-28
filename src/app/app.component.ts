import {Component, inject, effect} from '@angular/core';
import {BookService} from './services/book.service';
import {ShelfService} from './services/shelf.service';
import {RouterOutlet} from '@angular/router';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  template: `
    <main>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  bookService = inject(BookService);
  shelfService = inject(ShelfService);
  private authService = inject(AuthService);

  constructor() {
    effect(() => {
      if (this.authService.isLoggedIn()) {
        this.loadData();
      }
    });
  }

  private loadData() {
    this.bookService.getBooks();
    this.shelfService.getShelvedBooks();
    this.shelfService.getAllShelves();
    this.shelfService.getSidebarData();
  }
}
