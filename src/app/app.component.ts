import {Component, inject, OnInit, signal} from '@angular/core';
import {BookService} from './services/book.service';
import {ShelfService} from './services/shelf.service';
import {RouterLink, RouterOutlet} from '@angular/router';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {NavComponent} from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    SidebarComponent,
    NavComponent
  ],
  template: `
    <main>
      <app-nav />
      <h1>
        <a routerLink="/">
          {{ title() }}
        </a>
      </h1>
      <div class="container">
        <app-sidebar />
        <router-outlet />
      </div>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = signal('Bookshelf (Angular)');
  bookService = inject(BookService);
  shelfService = inject(ShelfService);

  ngOnInit() {
    this.bookService.getBooks();
    this.shelfService.getShelvedBooks();
    this.shelfService.getAllShelves();
    this.shelfService.getSidebarData();
  }
}
