import {Component, ElementRef, inject, signal, ViewChild} from '@angular/core';
import {PromptComponent} from '../prompt/prompt.component';
import {BookService} from '../../services/book.service';
import {CombinedInputComponent} from '../combined-input/combined-input.component';

@Component({
  selector: 'app-nav',
  imports: [
    PromptComponent,
    CombinedInputComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  bookService = inject(BookService);
  promptOpen = signal(false);
  @ViewChild('combinedInput') dialog!: ElementRef<HTMLDialogElement>;

  openPrompt() {
    this.promptOpen.set(true);
  }

  openDialog() {
    this.dialog.nativeElement.showModal();
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

  onCloseDialog() {
    this.dialog.nativeElement.close();
  }
}
