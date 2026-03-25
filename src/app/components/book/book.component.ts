import {Component, inject, Input} from '@angular/core';
import {Book} from '../../models/book.type';
import {NgOptimizedImage} from '@angular/common';
import {KebabMenuComponent, MenuItem} from '../kebab-menu/kebab-menu.component';
import {BookService} from '../../services/book.service';
import {checkbox} from '@inquirer/prompts';

@Component({
  selector: 'app-book',
  imports: [
    NgOptimizedImage,
    KebabMenuComponent
  ],
  template: `
    <div class="book">
      <img
        ngSrc="{{ book.img_url }}"
        priority
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
        <app-kebab-menu
          [items]="menuItems"
        />
      </div>
    </div>
  `,
  styleUrl: './book.component.css',
})
export class BookComponent {
  @Input() book!: Book;
  bookService = inject(BookService);

  handleBookDelete() {
    this.bookService
      .deleteBook(this.book.title, this.book.isbn)?.subscribe({
      next: () => {
        console.log(`Book deleted`);
      },
      error: (err) => {
        console.error('Failed to delete book', err);
      }
    })
  }

  menuItems: MenuItem[] = [
    {label: 'Delete', action: () => {this.handleBookDelete()}}
  ]
  protected readonly checkbox = checkbox;
}
