import {Component, Input} from '@angular/core';
import {Book} from '../../models/book.type';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [
    NgOptimizedImage
  ],
  template: `
    <div class="book">
      <img
        ngSrc="{{ book.img_url }}"
        height="640"
        width="400"
        alt="\`{{ book.title }} by {{ book.author }}\`"
      />
      <div class="book-content">
        <p class="title">{{ book.title }}</p>
        <div class="meta">
          <p class="author">{{ book.author }}</p>
          <p class="publishYear">{{ book.publish_year }}</p>
          <p class="isbn">{{ book.isbn_h }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './book.component.css',
})
export class BookComponent {
  @Input() book!: Book;
}
