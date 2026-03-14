import {Component, inject, OnInit, signal} from '@angular/core';
import {BookComponent} from '../book/book.component';
import {BookService} from '../../services/book.service';
import {ShelfService} from '../../services/shelf.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shelf',
  imports: [BookComponent],
  template: `
    <div>
      <h2>@if (shelfId) {
        {{ shelfId }}
      } @else {
        {{ shelf() }}
      }</h2>
      <section class="shelf">
        @if (shelfId !== undefined) {
          @for (book of shelfService.shelvedBooks(); track book.isbn) {
            @if (shelfId == book.shelf) {
              <app-book [book]="book"/>
            }
          }
        } @else {
          @for (book of bookService.books(); track book.isbn) {
            <app-book [book]="book"/>
          }
        }
      </section>
    </div>
  `,
  styleUrl: './shelf.component.css',
})
export class ShelfComponent implements OnInit {
  bookService = inject(BookService);
  shelfService = inject(ShelfService);
  shelf = signal('Books')
  shelfId?: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.shelfId = params.get('shelfId') ?? undefined;
    })
  }
}
