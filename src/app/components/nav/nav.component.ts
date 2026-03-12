import {Component, inject, signal} from '@angular/core';
import {PromptComponent} from '../prompt/prompt.component';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-nav',
  imports: [
    PromptComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  bookService = inject(BookService);
  promptOpen = signal(false);

  openPrompt() {
    this.promptOpen.set(true);
  }

  addBook(isbn: string) {
    this.bookService.addBook(isbn).subscribe({
      next: () => {
        console.log('Book added');
      },
      error: (err) => {
        console.error('Failed to add book', err);
      }
    });
    this.promptOpen.set(false);
  }

  onClose() {
    this.promptOpen.set(false);
  }
}
