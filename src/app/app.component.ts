import {Component, inject, OnInit, signal} from '@angular/core';
import {BookService} from './services/book.service';
import {ShelfService} from './services/shelf.service';
import {ShelfComponent} from './components/shelf/shelf.component';

@Component({
  selector: 'app-root',
  imports: [
    ShelfComponent
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
