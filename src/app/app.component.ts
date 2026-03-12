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
  templateUrl: './app.component.html',
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
