import {Component, inject, signal} from '@angular/core';
import {BookComponent} from '../book/book.component';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-shelf',
  imports: [BookComponent],
  templateUrl: './shelf.component.html',
  styleUrl: './shelf.component.css',
})
export class ShelfComponent {
  bookService = inject(BookService);
  shelf = signal('Books');
}
