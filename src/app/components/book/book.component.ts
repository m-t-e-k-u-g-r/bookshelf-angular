import {Component, Input} from '@angular/core';
import {Book} from '../../models/book.type';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  @Input() book!: Book;
}
